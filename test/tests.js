const expect = chai.expect
var string = 'HEY itS ME JQueery'
var album = 'the_college_dropout'
var object = {
  sauce : 0,
  ketchup : 1
}
describe('valuetourl',function(){
  it('should replace spaces with underscores',function(){
    const expected = 'HEY_ITS_ME_JQUEERY'
    const actual = (valuetourl(string)).toUpperCase()
    expect(actual).to.equal(expected)
  })
  it('should change the string to lowercase',function(){
    const expected = 'hey_its_me_jqueery'
    const actual = (valuetourl(string))
    expect(actual).to.equal(expected)
  })
})
describe('urltovalue',function(){
  it('should replace underscores with spaces',function(){
    const expected = 'hey its me jqueery'
    const actual = (urltovalue(string)).toLowerCase()
    expect(actual).to.equal(expected)
  })
  it('should change the string to uppercase',function(){
    const expected = 'HEY ITS ME JQUEERY'
    const actual = urltovalue(string)
    expect(actual).to.equal(expected)
  })
})
describe('getsprite',function(){
  it('should return the album art url of the selected',function(){
    const expected = 'http://i.imgur.com/X2ruUdL.jpg'
    const actual = (getsprite(album))
    expect(actual).to.equal(expected)
  })
  it("should return funzies gif if the album isnt one of kayne's main ones",function(){
    const expected = 'https://media.giphy.com/media/51h03rLP33G5G/giphy.gif'
    const actual = (getsprite(string))
    expect(actual).to.equal(expected)
  })
})
describe('convertobj',function(){
  it('should convert object to an array',function(){
    const expected = null
    const actual = (convertobj(object))[0]
    expect(actual).to.not.equal(expected)
  })
  it('should be an ordered array by number of wins decending',function(){
    const expected = [['ketchup',1],['sauce',0]]
    const actual = (convertobj(object))
  })
})
describe('getrandom',function(){
  it('should return a string',function(){
    const expected='string'
    const actual=typeof(getrandom())
  })
})

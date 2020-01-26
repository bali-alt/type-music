var sing=JSON.parse(localStorage.getItem('sing'))||''
var song=JSON.parse(localStorage.getItem('song'))||''
var state={
    sing:sing,
    song:song,
    singdetail:true
}
export default state
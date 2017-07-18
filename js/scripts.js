function Movie(mn, md, mt){
  this.movieName = mn;
  this.movieDate = md;
  this.movieTime = mt;
}
Movie.prototype.calculatePrice = function(ageGroup){
  var regularPrice = 10;
  if (this.movieTime === "matinee" && ageGroup === "<18") {
    return regularPrice -4;
  }else if(this.movieTime === "evening" && ageGroup === "<18"){
    return regularPrice - 2;
  }else if (this.movieTime === "evening" && ageGroup === "18-50") {
    return regularPrice;
  }else if(this.movieTime === "matinee" && ageGroup === "18-50"){
     return regularPrice - 2;
  }else if(this.movieTime === "evening" && ageGroup === ">50"){
    return regularPrice - 3;
  }else if(this.movieTime === "matinee" && ageGroup === ">50"){
    return regularPrice - 5;
  }
}








//UI Logic
$(document).ready(function(){
  $("form").submit(function(event){
    debugger;
  var movieName = $("#movieName").val();
  var movieDate = $("#movieDate").val();
  var movieTime = $("input:radio[name=time]:checked").val();
  var ageGroup = $("input:radio[name=age]:checked").val();

  var movieObj = new Movie(movieName,movieDate,movieTime);
  var price = movieObj.calculatePrice(ageGroup);
  console.log(price);



  });
});

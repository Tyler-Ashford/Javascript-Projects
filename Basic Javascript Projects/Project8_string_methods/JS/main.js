function connect() {
  var sent_1 = "I have ";
  var sent_2 = "new shoes ";
  var sent_3 = "that come ";
  var sent_4 = "this week. ";
  var whole_sentence = sent_1.concat(sent_2, sent_3, sent_4);
  document.getElementById("together").innerHTML = whole_sentence;
}

function slice_Method() {
  var Sentence = "I like to lift weights at the gym today.";
  var Section = Sentence.slice(10,15);
  document.getElementById("Cut").innerHTML = Section;
}

function string_Method() {
  var x = 200;
  document.getElementById("numbers_String").innerHTML = x.toString();
}

function precision_Method() {
  var X = 13458.3012987376112;
  document.getElementById("pre_Method").innerHTML = X.toPrecision(15);
}

function fixed_Method() {
  var y = 5.687924;
  document.getElementById("fixed").innerHTML = y.toFixed(4);
}

function value_Method() {
  var num = 25;
  document.getElementById("value").innerHTML = num.valueOf();
}

function openForm() {
  var x = document.getElementById("SchoolNumber").value; /// for input your ID Number ///
  document.getElementById("youridnumber").innerHTML = x; /// result based on ID Number ///

  /// Full Name ///
  const lastinfullname = document.getElementById("LastName").value;
  const firstinfullname = document.getElementById("FirstName").value;
  const middleinfullname = document.getElementById("MiddleName").value;

  const yourfullname = lastinfullname + "," + firstinfullname + " " + middleinfullname;
  document.getElementById('FULLNAME').textContent = yourfullname;

  var x = document.getElementById("Position").value;
  document.getElementById("yourposition").innerHTML = x;

  var x = document.getElementById("Rate").value;
  document.getElementById("yourrate").innerHTML = x;

  var x = document.getElementById("WorkDays").value;
  document.getElementById("yourworkdays").innerHTML = x;

  /// For Numbers in Rate and WorkDays ///
  const ratenum = document.getElementById('Rate').value;
  const workdaysnum = document.getElementById('WorkDays').value;

  const Rate = parseFloat(ratenum);
  const WorkDays = parseFloat(workdaysnum);
  
  /// For Gross Pay ///
  const yourgrosspay = Rate * WorkDays; /// Mutiply the Rate and Workdays then ///
  document.getElementById('result1').textContent = yourgrosspay; /// on this result will give in Gross Pay ///

  /// For Deductions ///
  /// SSS Deduction ///
  const yourSSS = yourgrosspay * ( 5 / 100 ); /// ( 5 / 100) = 0.05 then mutiply to yourgrosspay ///
  document.getElementById('result2').textContent = yourSSS;

  /// PAG-IBIG Deduction ///
  const yourPAGIBIG = yourgrosspay * ( 3 / 100 );
  document.getElementById('result3').textContent = yourPAGIBIG;

  /// PHILHEALTH Deduction ///
  const yourPHILHEALTH = yourgrosspay * ( 2 / 100 );
  document.getElementById('result4').textContent = yourPHILHEALTH;

  /// TAX Deduction ///
  const yourTAX = yourgrosspay * ( 5 / 100 );
  document.getElementById('result5').textContent = yourTAX;

  /// TOTAL Deduction ///
  const yourTOTAL = yourSSS + yourPAGIBIG + yourPHILHEALTH + yourTAX;
  document.getElementById('totalresult').textContent = yourTOTAL;

  /// NET PAY ///
  const yourNETPAY = yourgrosspay - yourTOTAL;
  document.getElementById('totalpay').textContent = yourNETPAY;


  /// IF INPUT IS EMPTY ///
  var inputschoolname = document.getElementById("SchoolNumber").value;
  var inputlastname = document.getElementById("LastName").value;
  var inputfirstname = document.getElementById("FirstName").value;
  var inputmiddlename = document.getElementById("MiddleName").value;
  var inputposition = document.getElementById("Position").value;
  if (isNaN(Rate) || isNaN(WorkDays) || inputschoolname == "" || inputlastname == "" || inputfirstname == "" || inputmiddlename == "" || inputposition == "") {
    alert("Please Fill the Field, it can cause missing text/number");
    return false;
  }

  document.getElementById("myForm").style.display = "block";
}
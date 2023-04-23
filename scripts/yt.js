function Cat() {
  // details
  const elements = Array.from(
    document.querySelectorAll("td.ng-binding.ng-scope")
  ).map((element) => {
    if (element.innerHTML == "F") {
      element.innerHTML = "A+";
    } else if (
      element.innerHTML == "B" ||
      element.innerHTML == "B+" ||
      element.innerHTML == "B-" ||
      element.innerHTML == "C" ||
      element.innerHTML == "C-" ||
      element.innerHTML == "D"
    ) {
      element.innerHTML = "A";
    } else if (element.innerHTML == "C+") {
      element.innerHTML = "A-";
    } else if (element.innerHTML == "0.0") {
      element.innerHTML = "3.0";
    }
  });
  console.log("https://irfanshadikrishad.github.io");
  const final = Array.from(document.querySelectorAll("th.ng-binding")).map(
    (fin) => {
      if (
        fin.innerHTML == "A-" ||
        fin.innerHTML == "B+" ||
        fin.innerHTML == "B" ||
        fin.innerHTML == "B-" ||
        fin.innerHTML == "C+" ||
        fin.innerHTML == "C" ||
        fin.innerHTML == "D" ||
        fin.innerHTML == "F"
      ) {
        fin.innerHTML = "A";
      }
    }
  );
  //   final touch
  const copyright = Array.from(document.querySelectorAll("a")).map((copy) => {
    if (copy.innerHTML == "HuddleByte") {
      copy.innerHTML = "Irfan Shadik Rishad";
      copy.href = "https://irfanshadikrishad.github.io";
    } else if (copy.href == "https://www.netacad.com/") {
      copy.href = "https://irfanshadikrishad.github.io";
    }
  });
  //   changing the affiliated images
  const img = Array.from(
    document.querySelectorAll(".wpb_single_image img")
  ).map((i) => {
    console.log(i.src);
    if (
      i.src == "https://www.lus.ac.bd/wp-content/uploads/2015/06/1-90x90.png"
    ) {
      i.src = "https://i.ibb.co/VNh1MF1/bd-gov.png";
    } else if (
      i.src ==
      "https://www.lus.ac.bd/wp-content/uploads/2015/06/ugc_logo-90x90.png"
    ) {
      i.src = "https://i.ibb.co/4Pgb86J/ugcc.png";
    } else if (
      i.src ==
      "https://www.lus.ac.bd/wp-content/uploads/2015/06/logo-1-copy.jpg"
    ) {
      i.src = "https://i.ibb.co/wWW01zc/aibs2.png";
    } else if (
      i.src ==
      "https://www.lus.ac.bd/wp-content/uploads/2015/06/Kyungdom-University-80x100.gif"
    ) {
      i.src = "https://i.ibb.co/QDf4v1r/kdu.png";
    } else if (
      i.src ==
      "https://www.lus.ac.bd/wp-content/uploads/2015/06/logo_102x130-80x100.png"
    ) {
      i.src = "https://i.ibb.co/Mgz2Lps/ism.png";
    } else if (
      i.src ==
      "https://www.lus.ac.bd/wp-content/uploads/2015/06/20042368-90x90.jpg"
    ) {
      i.src = "https://i.ibb.co/Xp7kkKt/ieee.png";
    } else if (
      i.src ==
      "https://www.lus.ac.bd/wp-content/uploads/2018/11/111B90F0-E940-4BFC-A9C8-2177A71E4957-80x100.jpeg"
    ) {
      i.src = "https://i.ibb.co/Ytw1g8z/muu.png";
    } else if (
      i.src == "https://www.lus.ac.bd/wp-content/uploads/2018/05/download.jpg"
    ) {
      i.src = "https://i.ibb.co/nPHF71Y/bu.png";
    } else if (
      i.src ==
      "https://www.lus.ac.bd/wp-content/uploads/2015/06/brand-80x100.gif"
    ) {
      i.src = "https://i.ibb.co/ZN6pbn4/icon128.png";
    }
  });
  // main result
  document.querySelectorAll(".col-sm-3.ng-binding")[0].innerHTML =
    "<strong>CGPA :</strong> 3.69";
  document.querySelectorAll(".col-sm-3.ng-binding")[1].innerHTML =
    "<strong>Grade :</strong> A";
}
setInterval(Cat, 500);

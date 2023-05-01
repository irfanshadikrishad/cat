function Cat() {
  // details
  const elements = Array.from(
    document.querySelectorAll("td.ng-binding.ng-scope")
  ).map((element) => {
    if (element.innerHTML == "F") {
      element.innerHTML = "B+";
    } else if (element.innerHTML == "D") {
      element.innerHTML = "B";
    } else if (element.innerHTML == "C") {
      element.innerHTML = "A-";
    } else if (element.innerHTML == "C+") {
      element.innerHTML = "A";
    } else if (element.innerHTML == "B-") {
      element.innerHTML = "A+";
    } else if (element.innerHTML == "0.0") {
      element.innerHTML = "3.25";
    } else if (element.innerHTML == "2.0") {
      element.innerHTML = "3.0";
    } else if (element.innerHTML == "2.25") {
      element.innerHTML = "3.5";
    } else if (element.innerHTML == "2.5") {
      element.innerHTML = "3.75";
    } else if (element.innerHTML == "2.75") {
      element.innerHTML = "4.0";
    }
  });
  const final = Array.from(document.querySelectorAll("th.ng-binding")).map(
    (fin) => {
      if (
        fin.innerHTML == "F" ||
        fin.innerHTML == "D" ||
        fin.innerHTML == "C" ||
        fin.innerHTML == "C+"
      ) {
        fin.innerHTML = "A";
      } else if (
        fin.innerHTML == "B-" ||
        fin.innerHTML == "B" ||
        fin.innerHTML == "B+"
      ) {
        fin.innerHTML = "A";
      }
      if (fin.innerHTML <= 3.0) {
        fin.innerHTML = "3.51";
      } else if (fin.innerHTML <= 3.5) {
        fin.innerHTML = "3.65";
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
  let cgpa = 0;
  let semester = 0;
  const absolute = Array.from(document.querySelectorAll("th.ng-binding")).map(
    (abs) => {
      if (abs.innerHTML <= 4) {
        cgpa = cgpa + Number(abs.innerHTML);
        semester = semester + 1;
      }
    }
  );
  let avarage_cgpa = cgpa / semester;
  // absolute cgpa
  document.querySelectorAll(
    ".col-sm-3.ng-binding"
  )[0].innerHTML = `<strong>CGPA :</strong> ${avarage_cgpa}`;
  // absolute grade
  if (avarage_cgpa == "0.0") {
    document.querySelectorAll(".col-sm-3.ng-binding")[1].innerHTML =
      "<strong>Grade :</strong> F";
  } else if (avarage_cgpa <= "2.0") {
    document.querySelectorAll(".col-sm-3.ng-binding")[1].innerHTML =
      "<strong>Grade :</strong> D";
  } else if (avarage_cgpa <= "2.25") {
    document.querySelectorAll(".col-sm-3.ng-binding")[1].innerHTML =
      "<strong>Grade :</strong> C";
  } else if (avarage_cgpa <= "2.5") {
    document.querySelectorAll(".col-sm-3.ng-binding")[1].innerHTML =
      "<strong>Grade :</strong> C+";
  } else if (avarage_cgpa <= "2.75") {
    document.querySelectorAll(".col-sm-3.ng-binding")[1].innerHTML =
      "<strong>Grade :</strong> B-";
  } else if (avarage_cgpa <= "3.0") {
    document.querySelectorAll(".col-sm-3.ng-binding")[1].innerHTML =
      "<strong>Grade :</strong> B";
  } else if (avarage_cgpa <= "3.25") {
    document.querySelectorAll(".col-sm-3.ng-binding")[1].innerHTML =
      "<strong>Grade :</strong> B+";
  } else if (avarage_cgpa <= "3.5") {
    document.querySelectorAll(".col-sm-3.ng-binding")[1].innerHTML =
      "<strong>Grade :</strong> A-";
  } else if (avarage_cgpa <= "3.75") {
    document.querySelectorAll(".col-sm-3.ng-binding")[1].innerHTML =
      "<strong>Grade :</strong> A";
  } else if (avarage_cgpa <= "4.0") {
    document.querySelectorAll(".col-sm-3.ng-binding")[1].innerHTML =
      "<strong>Grade :</strong> A+";
  }
}
setInterval(Cat, 1000);
function setFavicons(favImg) {
  let headTitle = document.querySelector("head");
  let setFavicon = document.createElement("link");
  setFavicon.setAttribute("rel", "shortcut icon");
  setFavicon.setAttribute("href", favImg);
  headTitle.appendChild(setFavicon);
}
setFavicons("https://i.ibb.co/ZN6pbn4/icon128.png");

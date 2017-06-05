var domIsReady = (function(domIsReady) {  
  var isBrowserIeOrNot = function() {
    return (!document.attachEvent || typeof document.attachEvent === "undefined" ? 'not-ie' : 'ie');
  }
  
  domIsReady = function(callback) {
    if(callback && typeof callback === 'function'){
      if(isBrowserIeOrNot() !== 'ie') {
        document.addEventListener("DOMContentLoaded", function() {          
            return callback();
        });
      } else {
        document.attachEvent("onreadystatechange", function() {
          if(document.readyState === "complete") {
            return callback();
          }
        });
      }
    } else {
      console.error('The callback is not a function!');
    }
  }
  
  return domIsReady;
})(domIsReady || {});

(function(document, window, domIsReady, undefined) {
  domIsReady(function() {
     var questionBox = document.getElementById('question-box');
     var questionTitle = document.getElementById('question-title');
     
     questionTitle.addEventListener('click', function() {
      if (questionBox.classList) {
        questionBox.classList.toggle('is-open');
      } else {
        var classes = questionBox.className.split(' ');
        var existingIndex = classes.indexOf('is-open');

        if (existingIndex >= 0)
        classes.splice(existingIndex, 1);
        else
        classes.push('is-open');

        questionBox.className = classes.join(' ');
      }
    });

    boxPhone = document.getElementById('box-phone');
    inputPhone = document.getElementById('input-phone');

    boxPhone.addEventListener('click', function () {
      if (inputPhone.checked) {
        inputPhone.classList.toggle('input-show');
      } else {
        var classes = inputPhone.className.split(' ');
        var existingIndex = classes.indexOf('input-show');

        if (existingIndex >= 0)
        classes.splice(existingIndex, 1);
        else
        classes.push('input-show');

        inputPhone.className = classes.join(' ');
      }
    });

    boxMail = document.getElementById('box-mail');
    inputMail = document.getElementById('input-mail');

    boxMail.addEventListener('click', function () {
      if (inputMail.checked) {
        inputMail.classList.toggle('input-show');
      } else {
        var classes = inputMail.className.split(' ');
        var existingIndex = classes.indexOf('input-show');

        if (existingIndex >= 0)
        classes.splice(existingIndex, 1);
        else
        classes.push('input-show');

        inputMail.className = classes.join(' ');
      }
    });
    
    boxLetter = document.getElementById('box-letter');
    inputLetter = document.getElementById('input-letter');

    boxLetter.addEventListener('click', function () {
      if (inputLetter.checked) {
        inputLetter.classList.toggle('input-show');
      } else {
        var classes = inputLetter.className.split(' ');
        var existingIndex = classes.indexOf('input-show');

        if (existingIndex >= 0)
        classes.splice(existingIndex, 1);
        else
        classes.push('input-show');

        inputLetter.className = classes.join(' ');
      }
    });


  });
})(document, window, domIsReady);
// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

let changeColor = document.getElementById('changeColor');

chrome.storage.sync.get('color', function(data) {
  changeColor.style.backgroundColor = data.color;
  changeColor.setAttribute('value', data.color);
 
});
chrome.tabs.onUpdated.addListener( function (tabId, changeInfo, tab) {
  if (changeInfo.status == 'complete' && tab.active) {
      chrome.tabs.executeScript(
        tabId,
          {file:'contentScript.js'}
          //{code: 'document.body.style.backgroundColor = "' + color + '";'}
          );
 
  }
})

changeColor.onclick = function(element) {
  let color = element.target.value;
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.executeScript(
        tabs[0].id,
        {file:'contentScript.js'}
        //{code: 'document.body.style.backgroundColor = "' + color + '";'}
        );
  });
};

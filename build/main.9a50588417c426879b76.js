(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{L1EO:function(t,e,n){},QfWi:function(t,e,n){"use strict";n.r(e);n("D/wG"),n("L1EO");var r=n("dIfx"),o=(n("IlkV"),n("JBxO"),n("FdtR"),function(){var t={maximumAge:8*Math.pow(10,6)};return new Promise(function(e,n){navigator.geolocation.getCurrentPosition(e,n,t)})}),i=function(t){return fetch("https://api.apixu.com/v1/current.json?key=768d2ccc74cd461e8ba105617191507&q="+t).then(function(t){return t.json()})};r.a.defaults.styling="material";var c={form:document.querySelector("#search-form"),location:document.querySelector('[data-field="location"]'),temperature:document.querySelector('[data-field="temp"]'),humidity:document.querySelector('[data-field="humidity"]'),wind:document.querySelector('[data-field="wind"]'),conditions:document.querySelector('[data-field="conditions"]'),icon:document.querySelector(".icon")};function u(t){c.icon.setAttribute("alt",t.current.condition.text),c.icon.setAttribute("src","https:"+t.current.condition.icon),a(c.location,t.location.name),a(c.temperature,""+t.current.temp_c),a(c.humidity,t.current.humidity+" %"),a(c.wind,t.current.wind_kph+" kph"),a(c.conditions,t.current.condition.text),document.querySelector("#weather").classList.remove("is-hidden")}function a(t,e){t.textContent=e}o().then(function(t){var e=t.coords;return i(e.latitude+","+e.longitude)}).then(function(t){return u(t)}).catch(function(){r.a.error({text:"Нет прав доступа к геопозиции, используйте поиск по имени города."})}),c.form.addEventListener("submit",function(t){t.preventDefault();var e=t.currentTarget.city.value;i(e).then(function(t){return u(t)}).catch(function(t){return console.error(t)}),function(t){throw new Error('"'+t+'" is read-only')}("query"),e=""})}},[["QfWi",1,2]]]);
//# sourceMappingURL=main.9a50588417c426879b76.js.map
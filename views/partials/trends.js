alert('it ran');
let hlinks = document.querySelectorAll('.trend-list-item > a');

hlinks.forEach(function (hlink) {
  let h = hlink.getAttribute('href');
  for(let i = 0; i<h.length;i++)
  {
    if(h[i] == '#')
    {
      h = tr.substr(0 , i) + '`' + tr.substr(i+1);
    }
  }
  hlink.setAttribute('href',h);
})


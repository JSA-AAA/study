function a(arg1, arg2) {
  const div1 = document.getElementById('div1')
  const divstyle = {
    color: 'red',
    height: '100px',
    width: '100px',
  }

  if (arg1 === true) {
    divstyle.width = '120px'
  }

  if (arg2) {
    div1.innerHTML = 'hello'
  }

  Object.assign(div1.style, divstyle)
}
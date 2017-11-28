import style from './app.css' //sama juga dengan required file app.css

import React from 'react'
import ReactDOM from 'react-dom'

var halo = "selamat datang mas bros"
console.log(halo)
document.querySelector('#title').innerHTML = halo //menampilkan teks dari variabel halo ke body html

	ReactDOM.render(
		<h1>Hello, world!</h1>,
		document.getElementById('root')
	) //basic react untuk menampilkan hello world di DOM dengan id root

import axios from 'axios'

let base = ""

let http = new axios.create({
	baseURL:base
})
export http
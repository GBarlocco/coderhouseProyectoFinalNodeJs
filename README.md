# LAS TUNICIAS  :cactus:

*<p>[DEMO](https://mototravelgastonbarlocco.netlify.app)*</p>
*<p>[VIDEO MVC](https://youtube.com/watch?v=OtUsP7-1rp8)*</p>
*<p>[VIDEO API Restul](https://youtube.com/watch?v=OtUsP7-1rp8)*</p>

## Introduction
eCommerce Website [NodeJs]

## App
[![las-tunicias-1.jpg](https://i.postimg.cc/65ssdsDn/las-tunicias-1.jpg)](https://postimg.cc/23xXDtjS)
[![las-tunicias-2.jpg](https://i.postimg.cc/wT5rL15Y/las-tunicias-2.jpg)](https://postimg.cc/1ftMZ5Yv)
[![las-tunicias-3.jpg](https://i.postimg.cc/wTzfq9Cf/las-tunicias-3.jpg)](https://postimg.cc/3WLC9QJm)
[![las-tunicias-4.jpg](https://i.postimg.cc/nrJkh1Pj/las-tunicias-4.jpg)](https://postimg.cc/WF5r90jT)
[![las-tunicias-5.jpg](https://i.postimg.cc/nhPGDxWt/las-tunicias-5.jpg)](https://postimg.cc/zyTgss5d)
[![las-tunicias-6.jpg](https://i.postimg.cc/1tpG2q39/las-tunicias-6.jpg)](https://postimg.cc/hztQ7hmw)
[![las-tunicias-7.jpg](https://i.postimg.cc/Qx6p2shW/las-tunicias-7.jpg)](https://postimg.cc/svhQWkBV)
[![las-tunicias-8.jpg](https://i.postimg.cc/TPbg5Dmr/las-tunicias-8.jpg)](https://postimg.cc/jWsLGCM5)


## Solución:

### Usuarios:
- User: admin, pass: 123456 --> permite agregar productos.

### Prueba con Artillery:
#### Modo Cluster:
- Terminal1: node server.js -CLUSTER
- Terminal2: artillery quick –-count 50 -n 20 "http://localhost:8080/api/productos" > result_api_productos_CLUSTER.txt
- Resultados del analisis: result_api_productos_CLUSTER.txt

#### Modo Fork:
- Terminal1: node server.js -CLUSTER
- Terminal2: artillery quick –-count 50 -n 20 "http://localhost:8080/api/productos" > result_api_productos_CLUSTER.txt
- Resultados del analisis: result_api_productos_FORK.txt

#### Run server: `nodemon server.js - CLUSTER`  --> modo Cluster
#### Run server: `nodemon server.js ` --> modo Fork

### Heroku:
- [App](https://proyecto-gaston-barlocco.herokuapp.com)

## Test API - Postman
![Postman](https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=Postman&logoColor=white)
> [Documentación API](https://documenter.getpostman.com/view/15433212/2s8YRcNwSy)

## Extra
- [Documentation](https://nodejs.org/es/) Nodejs
- [Documentation](https://es.wikipedia.org/wiki/Protocolo_de_transferencia_de_hipertexto) HTTP
- [Documentation](https://www.npmjs.com/package/nodemon) nodemon
- [Documentation](https://expressjs.com/es/) express
- [Documentation](https://www.postman.com) Postman

## Academy
> [CODERHOUSE](https://www.coderhouse.com.uy)

## Course
> [Node Js](https://www.coderhouse.com.uy/online/programacion-backend)

## Teach & tutor
> <p>Group: 30975.</p>
> <p>Teach: Iram Gutierrez</p>
> <p>Tutor: Gonzalo Moure.</p> 

## Author
> <p>Gastón Barlocco. </p>
> <p>Email: barlocco@hotmail.es </p>


---
<p align='center'>
&nbsp;&nbsp;&nbsp;&nbsp;
  <a href="https://www.linkedin.com/in/gastón-barlocco-315756148/"><img src="https://img.shields.io/badge/linkedin-%230077B5.svg?&style=for-the-badge&logo=linkedin&logoColor=white" /></a>
</p>

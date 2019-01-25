var express = require('express')
var aplicacion = express()


const net = require('net') //Se instalo
const server = require('http').Server(aplicacion) // Es lo que instalamos, y va a funcionar como servidor
const socket = require('socket.io')(server)

//Este serán las direcciones
var HOST = "https://redserver2019.herokuapp.com/"  //Este mi IP  de la red
var PORT = " 3000"  // es el puerto

// server.listen(PORT, function(){
//      console.log('Servidor Activo'+ PORT + ':' + HOST)
//  })

var ser = net.createServer(function(so){
    so.on('data', function(data){
        console.log('Usuario Nuevo')
    })

    so.on('data', function(data){

        // console.log(bufferOriginal.toString(data)); ESTE NO SIRVE
       
         console.log(data)

        
    })

    so.on('close', function(){
        console.log('Usuario Desconectado')
    })


});//Este va a crear nuestro servidor interno

ser.listen(PORT, HOST);

console.log('Conexion');


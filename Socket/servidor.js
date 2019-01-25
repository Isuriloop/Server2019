var express = require('express')
var aplicacion = express()
const net = require('net') 
const server = require('http').Server(aplicacion)
const socket = require('socket.io')(server)
var HOST = "https://redserver2019.herokuapp.com/" 
var PORT = "3000"  

var ser = net.createServer(function(so){
    so.on('data', function(data){
        console.log('Usuario Nuevo')
    })

    so.on('data', function(data){


         console.log(so)
         console.log(so.remoteAddress +" "+ so.remotePort)
        // console.log(data.toString('utf8'))

        
    })

    so.on('close', function(){
        console.log('Usuario Desconectado')
    })


});//Este va a crear nuestro servidor interno

ser.listen(PORT, HOST);

console.log('Conexion');


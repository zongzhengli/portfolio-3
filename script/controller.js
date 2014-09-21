var app = angular.module("mainApp", ['ngAnimate']);

var pages = [
    {
        "title": "ZONG ZHENG LI",
        "id": "zong",
        "bg": "media/bg_flocking.png",
        "invert": true,
        "description": "Hello, I'm Zong, a computer science student at the University of Waterloo. I love coding and see code projects as a form of creative expression. Here you'll find some of the stuff I've created in my spare time."
    },
    {
        "title": "N-BODY SIMULATION",
        "id": "nBody",
        "bg": "media/bg_n-body.png",
        "invert": false,
        "description": "This is a real-time n-body simulation written in C#. It calculates forces using a multithreaded implementation of the Barnes-Hut algorithm. Various systems (planetary, binary, etc) can be modelled, and I took advantage of my Lattice library to perform the 3D drawing."
    },
    {
        "title": "ABSOLUTE ZERO",
        "id": "zero",
        "bg": "media/bg_zero.png",
        "invert": true,
        "description": "Absolute Zero is my proudest accomplishment, the product of hundreds of hours of optimization and research. It is a C# chess engine written from scratch with an approximate playing strength of 2400 Elo. It defeats Windows' Chess Titans consistently, which was my goal when starting the project. It also defeats me consistently. Absolute Zero support UCI when started when argument -u."
    },
    {
        "title": "THREADS",
        "id": "threads",
        "bg": "media/bg_threads.png",
        "invert": false,
        "description": "Threads is a puzzle Flash game written in ActionScript. It features a vector art style and an original physics implementation that can handle simple pendulum, box, and projectile physics. It is still in development, but there are 7 playable levels. Move with WASD and anchor threads with the mouse."
    },
    {
        "title": "FLOCKING SIMULATION",
        "id": "flocking",
        "bg": "media/bg_flocking.png",
        "invert": true,
        "description": "It's amazing how complex behaviours can often be modelled by the application of a few simple rules. This is a flocking simulation in C#, written primarily to demonstrate my Lattice library. It allows real-time modification of flock behaviour (cohesion, separation, etc) and introduction of a predatory agent to make things more interesting."
    },
    {
        "title": "LATTICE GRAPHICS",
        "id": "lattice",
        "bg": "media/bg_lattice.png",
        "invert": false,
        "description": "I've often wanted to write applications with simple 3D graphics in C# so I created a library to make the process easy. Lattice is a 3D library for C#, featuring the ability to draw polygons with simple lighting and shading. I hope to improve it with more proper techniques so that I can release the code someday."
    },
    {
        "title": "MATRIX COMMAND PROMPT",
        "id": "matrix",
        "bg": "media/bg_matrix.png",
        "invert": false,
        "description": "Sometimes I get silly ideas that I turn into afternoon projects. The Matrix Command Prompt is one of these fun concepts, implemented in Java and packaged into a Windows executable. Note it isn't 100% equivalent to the Windows command-line interpreter, so its use may even cause unexpected amounts of fun!"
    }
];

app.controller("Controller", function ($scope) {
    $scope.pages = pages;
    $scope.activeId = pages[0].id;
    $scope.invert = pages[0].invert;

    $scope.changePage = function (id) {
        $scope.activeId = id;
        
        for (var i = 0; i < pages.length; i++) {
            var page = pages[i];
            if (page.id == id) {
                $scope.invert = page.invert;
                break;
            }
        }
    }
});

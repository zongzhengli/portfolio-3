var app = angular.module("mainApp", ['ngAnimate']);

var pages = [
    {
        "title": "ZONG ZHENG LI",
        "id": "home",
        "bg": "media/bg_home.jpg",
        "description": "Hello, I'm Zong, a computer science student at the University of Waterloo. Coding is one of my creative outlets and here you'll find some of the stuff I've developed in my spare time."
    },
    {
        "title": "N-BODY SIMULATION",
        "id": "nBody",
        "bg": "media/bg_n-body.png",
        "description": "This is a real-time n-body simulation written in C#. It calculates forces using a multithreaded implementation of the Barnes-Hut algorithm. Various systems (planetary, binary, etc) can be modelled, and I took advantage of my Lattice library to perform the 3D drawing."
    },
    {
        "title": "ABSOLUTE ZERO CHESS",
        "id": "zero",
        "bg": "media/bg_zero.png",
        "description": "Absolute Zero is the product of endless hours of optimization and research. It is a C# chess engine written from scratch with an approximate playing strength of 2400 Elo. It defeats Windows' Chess Titans consistently, which was my goal when starting the project. It also defeats me consistently. Absolute Zero support UCI when started when argument -u."
    },
    {
        "title": "THREADS GAME",
        "id": "threads",
        "bg": "media/bg_threads.png",
        "description": "Threads is a puzzle Flash game written in ActionScript. It features a vector art style and an original physics implementation that can handle simple pendulum, box, and projectile physics. It is still in development, but there are 7 playable levels. Move with WASD and anchor threads with the mouse."
    },
    {
        "title": "FLOCKING SIMULATION",
        "id": "flocking",
        "bg": "media/bg_flocking.png",
        "description": "It's amazing how complex behaviours can often be modelled by the application of a few simple rules. This is a flocking simulation in C#, written primarily to demonstrate my Lattice library. It allows real-time modification of flock behaviour (cohesion, separation, etc) and introduction of a predatory agent to make things more interesting."
    },
    {
        "title": "LATTICE GRAPHICS",
        "id": "lattice",
        "bg": "media/bg_lattice.png",
        "description": "I've often wanted to write applications with simple 3D graphics in C# so I created a library to make the process easy. Lattice is a 3D library for C#, featuring the ability to draw polygons with simple lighting and shading. I hope to improve it with more proper techniques so that I can release the code someday."
    },
    {
        "title": "FORCE-DIRECTED GRAPH",
        "id": "force",
        "bg": "media/bg_force.png",
        "description": "This is a demonstration of an efficient 3D force-directed graph written in C#. Repulsion between nodes is calculated using a multithreaded implementation of the Barnes-Hut algorithm. I took advantage of my Lattice library to do the 3D drawing."
    },
    {
        "title": "MATRIX COMMAND PROMPT",
        "id": "matrix",
        "bg": "media/bg_matrix.png",
        "description": "Sometimes I get silly ideas that I turn into afternoon projects. The Matrix Command Prompt is one of these fun concepts, implemented in Java and packaged into a Windows executable. Note it isn't 100% equivalent to the Windows command-line interpreter, so its use may even cause unexpected amounts of fun!"
    }
];

app.controller("Controller", function ($scope) {
    $scope.pages = pages;
    $scope.activeId = pages[0].id;

    $scope.changePage = function (id) {
        $scope.activeId = id;
    }
});

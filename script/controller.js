var app = angular.module("mainApp", ['ngAnimate']);

var pages = [
    {
        "title": "ZONG ZHENG LI",
        "id": "zong",
        "bg": "media/bg_flocking.png",
        "description": "Hello, I'm Zong, a computer science student at the University. This is my personal website where I exhibit some of my code projects. The current iteration of this site is still under development."
    },
    {
        "title": "N-BODY SIMULATION",
        "id": "nBody",
        "bg": "media/bg_n-body.png",
        "description": "This is a real-time n-body simulation written in C#. It calculates forces using a multithreaded implementation of the Barnes-Hut algorithm. Various systems(planetary, binary, etc) can be modelled, and I took advantage of my Lattice library to perform the 3D drawing."
    },
    {
        "title": "ABSOLUTE ZERO",
        "id": "zero",
        "bg": "media/bg_zero.png",
        "description": "Absolute Zero is C# chess engine with an approximate playing strength of 2400 Elo. It implements modern search techniques to achieve a low branching factor, and defeats Windows' Chess Titans consistently, which was my goal when starting the project. It also defeats me consistently. Absolute Zero support UCI when started when argument -u."
    },
    {
        "title": "THREADS",
        "id": "threads",
        "bg": "media/bg_threads.png",
        "description": "Threads is a puzzle Flash game written in ActionScript. It features my characteristic art style and an original physics implementation that can simple handle pendulum, box, and projectile physics. It is still in development, but there are 7 playable levels. Move with WASD and anchor threads with the mouse."
    },
    {
        "title": "FLOCKING SIMULATION",
        "id": "flocking",
        "bg": "media/bg_flocking.png",
        "description": "Written to demonstrate my Lattice library, this is a flocking simulation in C#. It allows real-time modification of flock behaviour (cohesion, separation, etc) and introduction of a predator agent to make things even more interesting. I really like the aesthetics of the birds and hope to find a greater use for them some day."
    },
    {
        "title": "LATTICE LIBRARY",
        "id": "lattice",
        "bg": "media/bg_lattice.png",
        "description": "I've often wanted to write applications with simple 3D graphics so I created a library to make the process easy. Lattice is a 3D library for C#, featuring the ability to draw polygons with simple lighting and shading. I hope to improve it some time with proper z-buffering and a better lighting implementation."
    },
    {
        "title": "THE MATRIX COMMAND PROMPT",
        "id": "matrix",
        "bg": "media/bg_matrix.png",
        "description": "This is a fun concept I implemented in Java and packaged into a Windows executable. Note it isn't completely fully functional compared to the Windows command-line interpreter but it is still a lot of fun."
    }
];

app.controller("Controller", function ($scope) {
    $scope.pages = pages;
    $scope.activeId = pages[0].id;

    $scope.changePage = function (id) {
        $scope.activeId = id;
    }
});

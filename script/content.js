var pages = [
    {
        "title": "ZONG ZHENG LI",
        "id": "home",
        "bg": "images/bg_home.jpg",
        "links": [
            { "text": "LINKEDIN"        , "url": "https://ca.linkedin.com/pub/zong-zheng-li/71/97b/565/" },
            { "text": "GITHUB"          , "url": "https://github.com/zongzhengli" },
            { "text": "STACKOVERFLOW"   , "url": "https://stackoverflow.com/users/1473751/zong-zheng-li" },
            { "text": "SOUNDCLOUD"      , "url": "https://soundcloud.com/zong-zheng-li" },
            { "text": "YOUTUBE"         , "url": "https://www.youtube.com/channel/UClRBClnU_0aL-qwUwH4_KDw" }
        ],
        "description": "I graduated with a CS degree from the University of Waterloo and work as a software engineer at Facebook. Coding is one of my creative outlets and here you'll find some of the stuff I've developed in my spare time and in school."
    },
    {
        "title": "NEURAL NETWORK",
        "id": "neural",
        "bg": "images/bg_neural.png",
        "fg": "images/fg_neural.png",
        "hasFg": true,
        "links": [
            { "text": "VIEW"            , "url": "http://csclub.uwaterloo.ca/~zzli/neural" },
            { "text": "GITHUB"          , "url": "https://github.com/zongzhengli/neural-network" }
        ],
        "description": "Play with a neural network in your browser! This neural network learns arbitrary algebraic functions via stochastic gradient descent. The visualizations were built using D3.js."
    },
    {
        "title": "CHESS ENGINE",
        "id": "zero",
        "bg": "images/bg_zero.png",
        "fg": "images/fg_zero.png",
        "hasFg": true,
        "links": [
            { "text": "DOWNLOAD"        , "url": "media/Absolute Zero.exe" },
            { "text": "GITHUB"          , "url": "https://github.com/zongzhengli/Absolute-Zero" }
        ],
        "description": "Absolute Zero is a bitboard chess engine written from scratch in C#. It has a playing strength of 2294 Elo. Absolute Zero has its own GUI and supports the UCI protocol when started when argument -u."
    },
    {
        "title": "RAY TRACING",
        "id": "rt",
        "bg": "images/bg_rt.png",
        "hasFg": false,
        "links": [
            { "text": "GALLERY"         , "url": "http://csclub.uwaterloo.ca/~zzli/cs488" },
        ],
        "description": "This won 1st place among the final projects of Waterloo's graphics course (CS 488) in Winter 2016. The gallery exhibits most of the ray tracer's features. Please ask if you're interested in the code."
    },
    {
        "title": "2048 BOT",
        "id": "2048",
        "bg": "images/bg_2048.png",
        "fg": "images/fg_2048.png",
        "hasFg": true,
        "links": [
            { "text": "VIDEO"           , "url": "https://www.youtube.com/watch?v=o6HGKy921YY" },
            { "text": "GITHUB"          , "url": "https://github.com/zongzhengli/2048-Bot" }
        ],
        "description": "This is a bot for the web game 2048. It can readily reach the 4096 tile while using only fractions of a second per move. It's written in JavaScript and is a lot of fun to watch."
    },
    {
        "title": "N-BODY SIMULATION",
        "id": "nBody",
        "bg": "images/bg_n-body.png",
        "links": [
            { "text": "DOWNLOAD"        , "url": "media/N-Body.zip" },
            { "text": "GITHUB"          , "url": "https://github.com/zongzhengli/N-Body" }
        ],
        "description": "This is a real-time n-body simulation written in C#. It calculates forces using a multithreaded implementation of the Barnes-Hut algorithm (using octrees). Various systems can be modelled, such as binary and planetary systems."
    },
    {
        "title": "FLOCKING SIMULATION",
        "id": "flocking",
        "bg": "images/bg_flocking.png",
        "links": [
            { "text": "VIDEO"           , "url": "https://www.youtube.com/watch?v=82tbG9OH9dg" },
            { "text": "DOWNLOAD"        , "url": "media/Flocking.zip" }
        ],
        "description": "It's amazing how complex behaviours can often be modelled by a few simple rules. This is a flocking simulation written for fun to demonstrate my simple graphics library. It allows real-time modification of flock behaviour (cohesion, separation, etc) and introduction of a predatory agent to make things more interesting."
    },
    {
        "title": "THREADS GAME",
        "id": "threads",
        "bg": "images/bg_threads.png",
        "links": [
            { "text": "PLAY"            , "url": "media/Threads.html" }
        ],
        "description": "Threads is a puzzle/platformer game written that I developed with Flash in high school. It features a smooth camera and simple physics implementation. It was never completed but features 7 playable levels. Move with WASD and anchor ends of threads with the cursor."
    },
    {
        "title": "SIMPLE GRAPHICS",
        "id": "lattice",
        "bg": "images/bg_lattice.png",
        "links": [
            { "text": "DOWNLOAD"        , "url": "media/Lattice.dll" }
        ],
        "description": "I often wanted to explore ideas with simple 3D graphics so I created a library to make the process easy. Lattice is a 3D library for C#, featuring the ability to draw shapes and polygons with perspective projection and basic shading."
    },
    {
        "title": "FORCE-DIRECTED GRAPH",
        "id": "force",
        "bg": "images/bg_force.png",
        "links": [
            { "text": "DOWNLOAD"        , "url": "media/Force-Directed.zip" },
            { "text": "GITHUB"          , "url": "https://github.com/zongzhengli/Force-Directed" }
        ],
        "description": "This is a demonstration of efficient 3D force-directed graph drawing. Nodes attract via spring-like edges and repulse to achieve even distribution."
    },
    {
        "title": "MATRIX COMMAND PROMPT",
        "id": "matrix",
        "bg": "images/bg_matrix.png",
        "links": [
            { "text": "DOWNLOAD"        , "url": "media/The Matrix Command Prompt.exe" }
        ],
        "description": "This is a silly idea I implemented long ago. It's written in Java and packaged into a Windows executable. It's missing some features compared to the Windows command-line interpreter, so don't use it for anything important!"
    }
];

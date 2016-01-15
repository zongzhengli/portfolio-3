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
        "description": "Hello, I'm Zong, a computer science student at the University of Waterloo. Coding is one of my creative outlets and here you'll find some of the stuff I've developed in my spare time."
    },
    {
        "title": "N-BODY SIMULATION",
        "id": "nBody",
        "bg": "images/bg_n-body.png",
        "links": [
            { "text": "DOWNLOAD"        , "url": "media/N-Body.zip" },
            { "text": "GITHUB"          , "url": "https://github.com/zongzhengli/N-Body" }
        ],
        "description": "This is a real-time n-body simulation written in C#. It calculates forces using a multithreaded implementation of the Barnes-Hut algorithm. Various systems (planetary, binary, etc) can be modelled, and I took advantage of my Lattice library to perform the 3D drawing."
    },
    {
        "title": "FLOCKING SIMULATION",
        "id": "flocking",
        "bg": "images/bg_flocking.png",
        "links": [
            { "text": "VIDEO"           , "url": "https://www.youtube.com/watch?v=82tbG9OH9dg" },
            { "text": "DOWNLOAD"        , "url": "media/Flocking.zip" }
        ],
        "description": "It's amazing how complex behaviours can often be modelled by the application of a few simple rules. This is a flocking simulation in C#, written primarily to demonstrate my Lattice library. It allows real-time modification of flock behaviour (cohesion, separation, etc) and introduction of a predatory agent to make things more interesting."
    },
    {
        "title": "ABSOLUTE ZERO CHESS",
        "id": "zero",
        "bg": "images/bg_zero.png",
        "fg": "images/fg_zero.png",
        "hasFg": true,
        "links": [
            { "text": "DOWNLOAD"        , "url": "media/Absolute Zero.exe" },
            { "text": "GITHUB"          , "url": "https://github.com/zongzhengli/Absolute-Zero" }
        ],
        "description": "Absolute Zero is the product of endless hours of optimization and research. It is a C# chess engine written from scratch with an approximate playing strength of 2237 Elo. It defeats Windows' Chess Titans consistently, which was my goal when starting the project. It also defeats me consistently. Absolute Zero support UCI when started when argument -u."
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
        "description": "This is a bot for the web game 2048. It can readibly reach the 4096 tile while using only fractions of a second per move. It's written in JavaScript and is a lot of fun to watch."
    },
    {
        "title": "THREADS GAME",
        "id": "threads",
        "bg": "images/bg_threads.png",
        "links": [
            { "text": "PLAY"            , "url": "media/Threads.html" }
        ],
        "description": "Threads is a puzzle/platformer game written that I developed with Flash in high school. It features a smooth camera and simple physics implementation. It was never completed but featjures 7 playable levels. Move with WASD and anchor ends of the threads with the cursor."
    },
    {
        "title": "LATTICE GRAPHICS",
        "id": "lattice",
        "bg": "images/bg_lattice.png",
        "links": [
            { "text": "DOWNLOAD"        , "url": "media/Lattice.dll" }
        ],
        "description": "I've often wanted to explore ideas with simple 3D graphics so I created a library to make the process easy. Lattice is a 3D library for C#, featuring the ability to draw polygons with simple lighting and shading. It's currently primarily for personal use until I clean up some of the code and release documentation."
    },
    {
        "title": "FORCE-DIRECTED GRAPH",
        "id": "force",
        "bg": "images/bg_force.png",
        "links": [
            { "text": "DOWNLOAD"        , "url": "media/Force-Directed.zip" },
            { "text": "GITHUB"          , "url": "https://github.com/zongzhengli/Force-Directed" }
        ],
        "description": "This is a demonstration of an efficient 3D force-directed graph written in C#. Repulsion between nodes is calculated using a multithreaded implementation of the Barnes-Hut algorithm. I took advantage of my Lattice library to do the 3D drawing."
    },
    {
        "title": "MATRIX COMMAND PROMPT",
        "id": "matrix",
        "bg": "images/bg_matrix.png",
        "links": [
            { "text": "DOWNLOAD"        , "url": "media/The Matrix Command Prompt.exe" }
        ],
        "description": "Sometimes I get silly ideas that I turn into afternoon projects. The Matrix Command Prompt is one of these fun concepts, implemented in Java and packaged into a Windows executable. Note it isn't 100% equivalent to the Windows command-line interpreter, but it's still a lot of fun!"
    }
];

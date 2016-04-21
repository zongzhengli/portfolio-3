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
        "title": "CHESS ENGINE",
        "id": "zero",
        "bg": "images/bg_zero.png",
        "fg": "images/fg_zero.png",
        "hasFg": true,
        "links": [
            { "text": "DOWNLOAD"        , "url": "media/Absolute Zero.exe" },
            { "text": "GITHUB"          , "url": "https://github.com/zongzhengli/Absolute-Zero" }
        ],
        "description": "Absolute Zero is one of my most proud accomplishments. It's a C# chess engine written from scratch with a playing strength of 2237 Elo. It defeats Windows' Chess Titans consistently (my goal when starting the project). Absolute Zero supports the UCI protocol when started when argument -u."
    },
    {
        "title": "RAY TRACING",
        "id": "rt",
        "bg": "images/bg_rt.png",
        "hasFg": false,
        "links": [
            { "text": "VIEW"        , "url": "http://csclub.uwaterloo.ca/~zzli/cs488" },
        ],
        "description": "I had a lot of fun implementing a ray tracer for the final project of CS 488, Waterloo's graphics course. The gallery linked shows off the ray tracer's features. I've withheld the code for academic reasons; please ask if you're interested."
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
        "title": "SIMPLE GRAPHICS",
        "id": "lattice",
        "bg": "images/bg_lattice.png",
        "links": [
            { "text": "DOWNLOAD"        , "url": "media/Lattice.dll" }
        ],
        "description": "I've often wanted to explore ideas with simple 3D graphics so I created a library to make the process easy. Lattice is a 3D library for C#, featuring the ability to draw shapes and polygons with perspective projection and basic shading. It's currently primarily for personal use."
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
        "description": "This is a silly idea I implemented long ago. For some reason, it's written in Java and packaged into a Windows executable. It's missing some features compared to the Windows command-line interpreter, if it matters."
    }
];

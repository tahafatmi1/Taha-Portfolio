
    // Three.js background
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({
        canvas: document.getElementById('bg-canvas'),
        alpha: true
    });

    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.position.setZ(30);

    // Create a more complex geometry
    const geometry = new THREE.IcosahedronGeometry(10, 1);
    const material = new THREE.MeshBasicMaterial({ color: 0x00ffff, wireframe: true });
    const icosahedron = new THREE.Mesh(geometry, material);
    scene.add(icosahedron);

    // Add some particles
    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCount = 5000;
    const posArray = new Float32Array(particlesCount * 3);

    for(let i = 0; i < particlesCount * 3; i++) {
        posArray[i] = (Math.random() - 0.5) * 100;
    }

    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
    const particlesMaterial = new THREE.PointsMaterial({
        size: 0.005,
        color: 0xff00ff
    });

    const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particlesMesh);

    function animate() {
        requestAnimationFrame(animate);
        icosahedron.rotation.x += 0.002;
        icosahedron.rotation.y += 0.005;
        icosahedron.rotation.z += 0.001;

        particlesMesh.rotation.y += 0.0005;

        renderer.render(scene, camera);
    }

    animate();

    // Resize handler
    window.addEventListener('resize', () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    });

    // Smooth scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Animate elements on scroll
    const animateOnScroll = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
                observer.unobserve(entry.target);
            }
        });
    };

    const observer = new IntersectionObserver(animateOnScroll, { threshold: 0.1 });

    document.querySelectorAll('.skill, .project').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        observer.observe(el);
    });

    // Add a class for animation when elements come into view
    document.addEventListener('DOMContentLoaded', (event) => {
        document.querySelectorAll('.animate').forEach((element) => {
            element.classList.remove('animate');
            observer.observe(element);
        });
    });

    // Mouse parallax effect for header
    const header = document.querySelector('header');
    document.addEventListener('mousemove', (e) => {
        const mouseX = e.clientX / window.innerWidth - 0.5;
        const mouseY = e.clientY / window.innerHeight - 0.5;
        
        header.style.transform = `translate(${mouseX * 20}px, ${mouseY * 20}px)`;
    });

    // Neon flicker effect for skills
    const skills = document.querySelectorAll('.skill');
    skills.forEach(skill => {
        setInterval(() => {
            skill.style.boxShadow = Math.random() > 0.9 ? 'none' : '0 0 15px var(--neon-blue)';
        }, 100);
    });

    // Dynamic color change for projects
    const projects = document.querySelectorAll('.project');
    projects.forEach(project => {
        project.addEventListener('mouseenter', () => {
            const colors = ['var(--neon-pink)', 'var(--neon-blue)', 'var(--neon-green)'];
            const randomColor = colors[Math.floor(Math.random() * colors.length)];
            project.style.borderColor = randomColor;
            project.style.boxShadow = `0 0 20px ${randomColor}`;
        });
        project.addEventListener('mouseleave', () => {
            project.style.borderColor = 'var(--neon-pink)';
            project.style.boxShadow = 'none';
        });
    });

    // Typing effect for the header
    const headerText = document.querySelector('header h1');
    const originalText = headerText.textContent;
    headerText.textContent = '';
    let i = 0;
    const typingEffect = setInterval(() => {
        if (i < originalText.length) {
            headerText.textContent += originalText.charAt(i);
            i++;
        } else {
            clearInterval(typingEffect);
        }
    }, 100);


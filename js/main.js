const t={es:{skip:"Saltar al contenido",navAbout:"Perfil",navExperience:"Experiencia",navProjects:"Proyectos",navSkills:"Stack",navContact:"Contacto",availability:"Disponible para retos en datos, ML y backend",heroSummary:"Convierto datos complejos en sistemas confiables: desde pipelines y modelos de machine learning hasta APIs y soluciones de procesamiento documental desplegadas en la nube.",seeWork:"Ver mi trabajo",downloadCv:"Descargar CV",location:"Colombia · Trabajo remoto",portrait:"Ingeniería con propósito",profileLabel:"PERFIL",aboutTitle:"Ingeniería que conecta datos, modelos y producto.",aboutOne:"Soy Ingeniero Informático con formación de posgrado en analítica de datos. Construyo soluciones de datos y machine learning de extremo a extremo: exploro el problema, diseño el flujo, desarrollo el servicio y lo llevo a producción.",aboutTwo:"He trabajado con procesamiento inteligente de documentos para servicios financieros, pipelines multimodales con Gemini y Vertex AI, microservicios en FastAPI y despliegues en Google Cloud.",p1t:"Calidad desde el dato",p1x:"Validación, trazabilidad y análisis antes de modelar.",p2t:"Backend para producción",p2x:"APIs observables, seguras y preparadas para escalar.",p3t:"IA con contexto de negocio",p3x:"Modelos al servicio de decisiones y procesos reales.",experienceLabel:"EXPERIENCIA",experienceTitle:"Experiencia aplicada a sistemas reales.",current:"2026 — Actualidad",inetumRole:"Data & Machine Learning Engineer — Consultor asignado a BBVA",inetumText:"Desarrollo de soluciones de procesamiento documental con Google Cloud Document AI; análisis de previsión de efectivo y diagnóstico de pipelines con Python, PySpark, SQL y AWS EMR para mejorar la calidad de datos.",shapyaText:"Diseño de un pipeline multimodal visión-lenguaje con Gemini sobre Vertex AI y microservicios de inferencia con FastAPI, Docker y Cloud Run, incluyendo validación, rate limiting y control de acceso.",projectsLabel:"PROYECTOS",projectsTitle:"Trabajo seleccionado.",insuranceTitle:"Modelo de coste de seguros",insuranceText:"Pipeline de regresión con EDA, tratamiento de multicolinealidad y valores atípicos, encoding, escalado y validación K-Fold. Incluye scoring batch y online con FastAPI, MAE y R².",trafficTitle:"Accidentalidad vial en Colombia",trafficText:"Limpieza y transformación de datos de accidentes de tránsito, análisis exploratorio y visualizaciones interactivas para identificar patrones regionales.",foodTitle:"Análisis inteligente de alimentos",foodText:"Sistema multimodal que analiza imágenes, identifica ingredientes y genera descripciones de menú mediante Gemini, Vertex AI y una API en Cloud Run.",viewGithub:"Explorar en GitHub",viewProfile:"Ver perfil técnico",skillsTitle:"Herramientas para llevar ideas a producción.",dataMl:"Datos & ML",educationLabel:"FORMACIÓN",educationTitle:"Base técnica, aprendizaje continuo.",degree:"Grado en Ingeniería Informática",certificate:"Certificado de Posgrado en Analítica de Datos Empresariales",ongoing:"En curso",continuing:"Formación continua",contactLabel:"CONTACTO",contactTitle:"Construyamos algo que convierta datos en valor.",contactText:"Estoy abierto a conversar sobre ingeniería de datos, machine learning, backend y soluciones de IA aplicadas.",writeMe:"Escríbeme",backTop:"Volver arriba ↑"},en:{skip:"Skip to content",navAbout:"Profile",navExperience:"Experience",navProjects:"Projects",navSkills:"Stack",navContact:"Contact",availability:"Open to data, ML and backend challenges",heroSummary:"I turn complex data into dependable systems: from data pipelines and machine learning models to production APIs and cloud-deployed document processing solutions.",seeWork:"See my work",downloadCv:"Download résumé",location:"Colombia · Remote",portrait:"Engineering with purpose",profileLabel:"PROFILE",aboutTitle:"Engineering that connects data, models and product.",aboutOne:"I am a Computer Engineer with graduate training in data analytics. I build end-to-end data and machine learning solutions: understanding the problem, designing the flow, developing the service and taking it to production.",aboutTwo:"My experience includes intelligent document processing for financial services, multimodal pipelines with Gemini and Vertex AI, FastAPI microservices and Google Cloud deployments.",p1t:"Quality starts with data",p1x:"Validation, traceability and analysis before modeling.",p2t:"Production-ready backend",p2x:"Observable, secure APIs designed to scale.",p3t:"AI with business context",p3x:"Models built for real decisions and processes.",experienceLabel:"EXPERIENCE",experienceTitle:"Experience applied to real systems.",current:"2026 — Present",inetumRole:"Data & Machine Learning Engineer — Consultant assigned to BBVA",inetumText:"Developing document processing solutions with Google Cloud Document AI; analyzing cash forecasting and diagnosing pipelines with Python, PySpark, SQL and AWS EMR to improve data quality.",shapyaText:"Designed a multimodal vision-language pipeline with Gemini on Vertex AI and inference microservices using FastAPI, Docker and Cloud Run, including validation, rate limiting and access control.",projectsLabel:"PROJECTS",projectsTitle:"Selected work.",insuranceTitle:"Insurance cost model",insuranceText:"Regression pipeline with EDA, multicollinearity and outlier treatment, encoding, scaling and K-Fold validation. Includes batch and online scoring with FastAPI, MAE and R².",trafficTitle:"Road traffic accidents in Colombia",trafficText:"Road accident data cleaning and transformation, exploratory analysis and interactive visualizations to identify regional patterns.",foodTitle:"AI-powered food analysis",foodText:"A multimodal system that analyzes images, identifies ingredients and creates menu descriptions using Gemini, Vertex AI and an API on Cloud Run.",viewGithub:"Explore on GitHub",viewProfile:"View technical profile",skillsTitle:"Tools for taking ideas to production.",dataMl:"Data & ML",educationLabel:"EDUCATION",educationTitle:"Technical foundations, continuous learning.",degree:"BSc in Computer Engineering",certificate:"Graduate Certificate in Business Data Analytics",ongoing:"Ongoing",continuing:"Continuing education",contactLabel:"CONTACT",contactTitle:"Let's build something that turns data into value.",contactText:"I am open to conversations about data engineering, machine learning, backend and applied AI solutions.",writeMe:"Get in touch",backTop:"Back to top ↑"}};
const root=document.documentElement,langBtn=document.querySelector(".language-toggle"),themeBtn=document.querySelector(".theme-toggle"),menuBtn=document.querySelector(".nav-toggle"),panel=document.querySelector(".nav-panel");
function language(lang){root.lang=lang;document.querySelectorAll("[data-i18n]").forEach(el=>{if(t[lang][el.dataset.i18n])el.textContent=t[lang][el.dataset.i18n]});langBtn.querySelector("b").textContent=lang.toUpperCase();langBtn.querySelector("span").textContent=lang==="es"?"EN":"ES";localStorage.setItem("portfolio-language",lang);document.title=lang==="es"?"Oscar David Bocanegra | Ingeniero de Datos, ML y Backend":"Oscar David Bocanegra | Data, ML & Backend Engineer"}
function theme(value){root.dataset.theme=value;themeBtn.querySelector("span").textContent=value==="dark"?"☼":"◐";localStorage.setItem("portfolio-theme",value)}
langBtn.addEventListener("click",()=>language(root.lang==="es"?"en":"es"));themeBtn.addEventListener("click",()=>theme(root.dataset.theme==="dark"?"light":"dark"));
menuBtn.addEventListener("click",()=>{const open=panel.classList.toggle("open");menuBtn.setAttribute("aria-expanded",open);menuBtn.setAttribute("aria-label",open?"Cerrar menú":"Abrir menú")});document.querySelectorAll(".nav-menu a").forEach(a=>a.addEventListener("click",()=>{panel.classList.remove("open");menuBtn.setAttribute("aria-expanded","false")}));
const observer="IntersectionObserver"in window?new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add("visible");observer.unobserve(entry.target)}}),{threshold:.12}):null;document.querySelectorAll(".reveal").forEach(el=>observer?observer.observe(el):el.classList.add("visible"));document.getElementById("year").textContent=new Date().getFullYear();
theme(localStorage.getItem("portfolio-theme")||(matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"));language(localStorage.getItem("portfolio-language")||(navigator.language.startsWith("es")?"es":"en"));

// Motion and navigation enhancements
const motionAllowed=!matchMedia("(prefers-reduced-motion: reduce)").matches;
const finePointer=matchMedia("(hover: hover) and (pointer: fine)").matches;
const progressBar=document.querySelector(".scroll-progress span");
const sections=[...document.querySelectorAll("main section[id]")];
const sectionLinks=[...document.querySelectorAll('.nav-menu a[href^="#"]')];

function updateScrollState(){
  const scrollable=document.documentElement.scrollHeight-innerHeight;
  progressBar.style.transform=`scaleX(${scrollable>0?scrollY/scrollable:0})`;
  const current=sections.reduce((active,section)=>scrollY>=section.offsetTop-180?section.id:active,"");
  sectionLinks.forEach(link=>link.classList.toggle("active",link.hash===`#${current}`));
}

addEventListener("scroll",updateScrollState,{passive:true});
addEventListener("resize",updateScrollState,{passive:true});
updateScrollState();

if(motionAllowed&&finePointer){
  addEventListener("pointermove",event=>{
    root.style.setProperty("--mx",`${event.clientX}px`);
    root.style.setProperty("--my",`${event.clientY}px`);
  },{passive:true});

  const portrait=document.querySelector(".interactive-card");
  portrait.addEventListener("pointermove",event=>{
    const box=portrait.getBoundingClientRect();
    const rotateY=((event.clientX-box.left)/box.width-.5)*10;
    const rotateX=-((event.clientY-box.top)/box.height-.5)*10;
    portrait.style.transform=`perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.015)`;
  });
  portrait.addEventListener("pointerleave",()=>portrait.style.transform="");

  document.querySelectorAll(".project").forEach(card=>card.addEventListener("pointermove",event=>{
    const box=card.getBoundingClientRect();
    card.style.setProperty("--card-x",`${event.clientX-box.left}px`);
    card.style.setProperty("--card-y",`${event.clientY-box.top}px`);
  }));
}

Object.assign(t.es,{
  ragTitle:"BBVA RAG Assistant",
  ragText:"Asistente RAG para consultar contenido institucional mediante recuperación semántica, embeddings locales, base vectorial y memoria conversacional. Incluye API, dashboard, métricas, pruebas y ejecución con Docker Compose.",
  edaTitle:"EDA Library",
  edaText:"Paquete de Python orientado a automatizar análisis exploratorios de datos y acelerar la inspección inicial de datasets con Pandas y NumPy.",
  todoTitle:"To-Do App",
  todoText:"Aplicación web de gestión de tareas con operaciones CRUD, construida para practicar arquitectura backend, persistencia de datos e interfaces web con Django.",
  repoCta:"Ver repositorio",
  languagesTitle:"Lenguajes",
  backendTitle:"Backend & Frameworks",
  aiTitle:"IA & Documentos",
  cloudTitle:"Cloud & DevOps"
});

Object.assign(t.en,{
  ragTitle:"BBVA RAG Assistant",
  ragText:"RAG assistant for institutional content using semantic retrieval, local embeddings, a vector database and conversational memory. Includes an API, dashboard, metrics, tests and Docker Compose setup.",
  edaTitle:"EDA Library",
  edaText:"Python package designed to automate exploratory data analysis and speed up the initial inspection of datasets with Pandas and NumPy.",
  todoTitle:"To-Do App",
  todoText:"Task management web application with CRUD operations, built to practice backend architecture, data persistence and web interfaces with Django.",
  repoCta:"View repository",
  languagesTitle:"Languages",
  backendTitle:"Backend & Frameworks",
  aiTitle:"AI & Documents",
  cloudTitle:"Cloud & DevOps"
});

language(root.lang);

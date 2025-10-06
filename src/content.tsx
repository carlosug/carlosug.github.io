import React from "react";
import { Paragraph } from './components/StyledComponents';
import LinkOut from "./components/LinkOut";
import LinkPara from './components/LinkPara';


// The short intro text placed at the top of the website
export const short_intro_text = <Paragraph>
 🤔 Research scientist working on AI for scientific research software. My goal is to develop general purpose agents that can automate key reuse tasks.
</Paragraph>

// A longer text about me, experiences and motivation
export const about_me_text = <>
  <Paragraph>
  Hello! I'm Carlos, and I am one of those human beings who loves to learn from others, science and research. 
  </Paragraph>

  <Paragraph>
  I now work as <strong>AI Trainer & Educational Developer</strong> for the <LinkPara href="https://www.tudelft.nl/library">Research Data and Software Team (RDS) at TU Delft Library </LinkPara>, and I'm <strong>doing a PhD</strong> in the <LinkPara href="https://oeg.fi.upm.es/">Ontology Engineering Group</LinkPara> at the <LinkPara href="https://www.upm.es/">UPM</LinkPara> with <LinkPara href="https://orcid.org/0000-0002-9260-0753">Prof. Dr. Oscar Corcho</LinkPara> and <LinkPara href="https://dgarijo.com/index.html">Prof. Daniel Garijo</LinkPara>. 
  {/* I am a strong advocate of open source and my research interests involve the usage of semantic web standards, and scientific software in general. */}
  </Paragraph>

  

  <Paragraph>
  When not dealing with numbers or reading, I’m a happy uncle, a swimmer, a tennis player and, last but not least, a loving supporter of Real Zaragoza football team.
  </Paragraph>

</>

// List of projects
export const projects = [
  {
    title: <LinkOut href="https://github.com/carlosug/READMEtoP-PLAN">🤖 README2PLAN</LinkOut>,
    langs: ['python'],
    image: 'https://www.aparences.net/wp-content/uploads/2012/02/francisco-de-goya.jpg',
    description: `Can machines interpret and execute plans and instructions for research software installation? `,
    //website_url: 'https://datasharingcoalition.eu/',
    git_url: 'https://github.com/carlosug/READMEtoP-PLAN',
    docs_url: 'https://link.springer.com/chapter/10.1007/978-3-031-65794-8_8',
    pip_url: 'https://zenodo.org/records/11485538',
  }, 
  {
    title: <LinkOut href="https://github.com/4TUResearchData/soss">🚀 4TUResearchData Semantics - SoSS</LinkOut>,
    langs: ['docker', 'python'],
    image: 'https://www.lavanguardia.com/files/image_948_465/uploads/2019/12/04/5f15f391d3c7a.jpeg',
    description: `Scientific open source Software (SOSS) - A repository that given an software arfefact DOI, it will computationally reproduce the software environment of the package.`,
    //website_url: 'https://datasharingcoalition.eu/',
    git_url: 'https://github.com/4TUResearchData/soss',
    // git_url: 'https://github.com/MaastrichtU-IDS/dsri-documentation',
  }, 
  {
    title: <LinkOut href="https://www.nfdi4datascience.de/community/mini-hackathons2023/">🎒 maSMP-LLMs </LinkOut>,
    langs: ['docker', 'python'],
    image: 'https://fundaciongoyaenaragon.es/files/resize/800x600/files/images/707_8.3.4.jpg',
    description: `A Machine-actionable Approach to Simplify the Creation of Software Management Plans (SMPs) at NFDI4DS is hosting a series of Mini Hackathons at ZB Med in Cologne.`,
    git_url: 'https://github.com/tu-delft-library/maSMP-LLM',
    // docs_url: 'https://link.springer.com/chapter/10.1007/978-3-031-65794-8_8',
    docs_url: 'https://zenodo.org/records/10374839',
  },  
  {
      title: <LinkOut href="https://www.clariah.nl/projects/fair-data-for-historical-games">🎲 PLAYFAIR</LinkOut>,
      langs: ['python', 'typescript'],
      image: 'https://elordenmundial.com/wp-content/uploads/2019/02/3ce075a9424c238fec6b04177d4e23f9.jpg',
      description: `A knowledge graph (KG) using semantic web technolgies. 
      We defined requirements and improvements to make the most comprehensive database about historical games FAIR, with special attention as to whether the existing tools help enhance data published on the web in digital humanities.`,
      website_url: 'https://druid.datalegend.net/UtrillaGuerreroC/-/stories/PLAYFAIR',
      docs_url: 'https://druid.datalegend.net/UtrillaGuerreroC/playfair',
      git_url: 'https://github.com/MaastrichtU-IDS/play-fair',
    },
    // {
    //   title: <LinkOut href="https://github.com/MaastrichtU-IDS/kg-food">♻️ KG4FOOD</LinkOut>,
    //   langs: ['python', 'typescript'],
    //   image: 'https://imagenes.heraldo.es/files/image_640_auto/uploads/imagenes/2024/05/13/augusto-ferrer-dalmau-visita-y-expone-en-zaragoza-1.jpeg',
    //   description: `A KG that integrates data sources from nutritional and food price sources using ISO-FOOD Ontology. The goal is to create a KG to monitor food price and analyse cost affordability of healthy habits over time.`,
    //   // docs_url: 'https://github.com/MaastrichtU-IDS/kg-food',
    //   git_url: 'https://github.com/MaastrichtU-IDS/kg-food',
    // },
    // {
    //   title: <LinkOut href="https://dsri.maastrichtuniversity.nl">🌐 DSRI</LinkOut>,
    //   langs: ['docker', 'kubernetes'],
    //   description: `The Data Science Research Infrastructure (DSRI) is a Kubernetes/OpenShift cluster for academic researchers to deploy Data Science workspaces and services,
    //   such as JupyterHub, RStudio, or VisualStudio Code server.`,
    //   website_url: 'https://dsri.maastrichtuniversity.nl',
    //   docs_url: 'https://dsri.maastrichtuniversity.nl',
    //   git_url: 'https://github.com/MaastrichtU-IDS/dsri-documentation',
    // },
    {
      title: <LinkOut href="https://library.maastrichtuniversity.nl/research/rdm/">🔭 CDDI</LinkOut>,
      langs: ['java', 'python'],
      image: 'https://cdn.pixabay.com/photo/2024/02/17/09/26/ai-generated-8578998_640.png',
      description: `The Community Data Driven Insight (CDDI) is a project that implemented FAIR research data and software management strategies with digital techniques across research communities.`,
     // website_url: 'https://doi.org/10.48550/arXiv.2303.07429',
      docs_url: 'https://doi.org/10.48550/arXiv.2303.07429',
      pip_url: 'https://doi.org/10.48550/arXiv.2303.07429',
    },
    {
      title: <LinkOut href="https://maastrichtu-ids.github.io/projects">💨 IDS research project directory</LinkOut>,
      langs: ['docker', 'typescript'],
      image: 'https://m.media-amazon.com/images/I/81Ug7dACrNL._AC_UF1000,1000_QL80_.jpg',
      description: `Co-developed a web service to insert projects from the Institute of Data Science (IDS) and its information from git repositories, alongside with generating JSON file using DOAP schema.`,
      // website_url: 'https://dsri.maastrichtuniversity.nl',
      docs_url: 'https://maastrichtu-ids.github.io/best-practices/docs/ids-projects#what-is-the-ids-projects-dashboard',
      git_url: 'https://github.com/MaastrichtU-IDS/projects',
    },
    
    // {
    //   title: '🪐 JupyterLab',
    //   langs: ['docker', 'python'],
    //   description: `JupyterLab workspace with VisualStudio Code integrated, and various packages and kernels pre-installed to help working with data science and knowledge graphs.`,
    //   git_url: 'https://github.com/MaastrichtU-IDS/jupyterlab',
    // },
  ]
  
export const past_text = <>


<Paragraph>
  In 2019, I joined the <LinkPara href="https://www.maastrichtuniversity.nl/research/institute-data-science">Institute of Data Science (IDS)</LinkPara> to develop my research software engineering skills, learn more about digital technologies, and contribute to open science. As research data scientist, I've been also involved in EU-wide research projects that investigate models and methods for efficient semantic indexing,
linking and retrival of heterogeneous and distributed data sources such as the <LinkPara href="https://www.eoscsecretariat.eu/">European Open Science Cloud (EOSC)</LinkPara>, and <LinkPara href="https://cost-dkg.eu/">EU COST Action CA19134 - Distributed Knowledge Graphs (DKG)</LinkPara>, 
as well as building communities and standards for research data management and software best practices as member in the <LinkPara href="https://www.rd-alliance.org/groups/fair-research-software-fair4rs-wg">FAIR for Research Software</LinkPara> working group at Research Data Alliance. 
Previously, I had also worked in industry as data scientist on a project funded 
by the <LinkPara href="https://www.esa.int/">European Space Agency (ESA)</LinkPara> and the <LinkPara href="https://www.eib.org/en/index.htm">European Investment Bank (EIB)</LinkPara> related to data integration, visualisation and statistical analysis. 
Check all archived research projects in this Github repository <LinkPara href="https://carlosug.github.io/researchblog/">(@carlosug)</LinkPara> or on this <LinkPara href="/researchprojects.pdf">🗂️ PDF</LinkPara>.
</Paragraph>
</>

export const courses = [
    {
      title:  <LinkOut href="https://esciencecenter-digital-skills.github.io/2020-10-19-Data-Carpentry-with-R/">🎲 Software Carpentry and Coderefinery courses</LinkOut>,
      langs: ['python'],
      description: `Introduction to software best practices for researchers of TU Delft University (2023, 2024).`,
      // website_url: 'http://index.semanticscience.org',
      // git_url: '',
    },
    {
      title:  <LinkOut href="https://tu-delft-library.github.io/rdm101-book/intro.html"> ✨ Research Data & Software Management</LinkOut>,
      langs: [],
      description: `Training digital skills for students and researchers at TU Delft University (2023, 2024).`,
      // website_url: 'http://index.semanticscience.org',
      // git_url: '',
    },
    {
      title: <LinkOut href="https://maastrichtu-ids.github.io/global-studies/">🤖 Introduction to data science</LinkOut>,
      langs: ['python'],
      description: `Introduction to data science with Python/Pandas/Seaborn for undergraduate students of social science (2022, 2021 and 2020).`,
      // website_url: 'https://fair-enough.semanticscience.org',
      // docs_url: 'https://maastrichtu-ids.github.io/fair-test',
      // git_url: 'https://github.com/MaastrichtU-IDS/fair-enough',
      // pip_url: 'https://pypi.org/project/fair-test',
    },
    {
      title: <LinkOut href="https://maastrichtu-ids.github.io/AppliedRR/">🔭 Applied Research Methods and Statistics</LinkOut>,
      langs: ['python', 'java'],
      description: `Data science in R for bachelor students in the applied data science minor (2021, 2022 - lectures and practicals).`,
      // website_url: 'https://collaboratory.semanticscience.org',
      // git_url: 'https://github.com/MaastrichtU-IDS/knowledge-collaboratory',
    },
    // {
    //   title: '🪐 JupyterLab',
    //   langs: ['docker', 'python'],
    //   description: `JupyterLab workspace with VisualStudio Code integrated, and various packages and kernels pre-installed to help working with data science and knowledge graphs.`,
    //   git_url: 'https://github.com/MaastrichtU-IDS/jupyterlab',
    // },
  ]

  export const supervising = <> 
  {/* <Paragraph>
I am an official Instructor in <LinkPara href="/carpentries-instructor.pdf">The Carpentries Open Science Community (Instructor certificate)</LinkPara> and co-supervised three BSc/MSc student projects related to semantic technologies and network science.
</Paragraph> */}

<Paragraph>
Other workshops and courses I have been involved in teaching and developing material include: <LinkPara href="https://zenodo.org/records/11492084">Exploring how AI tools can be integrated in the research software lifecycle (AI4RS)</LinkPara>, <LinkPara href="https://hackmd.io/@fair4rs/SybbutV26">FAIR Research Software Program (FAIR4RS)</LinkPara> and <LinkPara href="https://4turesearchdata-carpentries.github.io/GitCoDev/curriculum.html">Version Control and Collaborative Development for Research Software (GitCoDev)</LinkPara>.
</Paragraph>
</>


export const skills = [
    {
      title: 'Python',
      competency: 4,
      category: ['Languages', 'Data Science'],
    },
    {
      title: 'RDF',
      competency: 3,
      category: ['Semantic Web'],
    },
    {
      title: 'SPARQL',
      competency: 3,
      category: ['Semantic Web', "Databases"],
    },
    {
      title: 'Ontologies',
      competency: 3,
      category: ['Semantic Web'],
    },
    {
      title: 'SHACL',
      competency: 3,
      category: ['Semantic Web'],
    },
    {
      title: 'Bash',
      competency: 2,
      category: ['Languages', 'Tools'],
    },
    {
      title: 'Linux',
      competency: 3,
      category: ['System administration', 'Tools'],
    },
    {
      title: 'Docker',
      competency: 1,
      category: ['System administration', 'Tools'],
    },
    {
      title: 'Git',
      competency: 3,
      category: ['Tools'],
    },
    {
      title: 'OpenAPI',
      competency: 1,
      category: ['Web Development'],
    },
    {
      title: 'RDFLib',
      competency: 3,
      category: ['Semantic Web'],
    },
    {
      title: 'TypeScript',
      competency: 2,
      category: ['Languages', 'Web Development'],
    },
    {
      title: 'React',
      competency: 2,
      category: ['Web Development'],
    },
    {
      title: 'Material UI',
      competency: 12,
      category: ['Web Development'],
    },
    {
      title: 'HTML/CSS',
      competency: 3,
      category: ['Web Development'],
    },
    {
      title: 'ShEx',
      competency: 2,
      category: ['Semantic Web'],
    },
    {
      title: 'RML',
      competency: 2,
      category: ['Semantic Web'],
    },
    {
      title: 'Protégé',
      competency: 1,
      category: ['Semantic Web', 'Tools'],
    },
    {
      title: 'Rstudio',
      competency: 4,
      category: ['Tools'],
    },
    {
      title: 'Jupyter',
      competency: 4,
      category: ['Tools', 'Data Science'],
    },
    // {
    //   title: 'Talend ETL',
    //   competency: 3,
    //   category: ['Data Engineering', 'Tools'],
    // },
    {
      title: 'Node.js',
      competency: 2,
      category: ['Web Development'],
    },
    {
      title: 'Express.js',
      competency: 2,
      category: ['Web Development'],
    },
    {
      title: 'D3.js Graph',
      competency: 2,
      category: ['Web Development'],
    },
    {
      title: 'NetworkX',
      competency: 4,
      category: ['Statistics'],
    },
    // {
    //   title: 'Ruby on Rails',
    //   competency: 2,
    //   category: ['Languages', 'Web Development'],
    // },
    {
      title: 'RDF4J',
      competency: 2,
      category: ['Semantic Web'],
    },
    {
      title: 'MongoDB',
      competency: 1,
      category: ['Databases'],
    },
    {
      title: 'SQL',
      competency: 2,
      category: ['Databases'],
    },
    {
      title: 'NLP',
      competency: 3,
      category: ['Statistics'],
    },
    {
      title: 'GraphQL',
      competency: 1,
      category: ['Databases'],
    },
    {
      title: 'Pandas',
      competency: 4,
      category: ['Statistics', 'Tools'],
    },
    {
      title: 'Gatsby',
      competency: 2,
      category: ['Web Development'],
    },
    {
      title: 'MacOS',
      competency: 4,
      category: ['System administration'],
    },
  ]
  // .map((skill) => ({ ...skill, category: skill.category.sort() }));
  
  
  export const skillsCategories = [
    {
      title: 'Languages',
      color: 'languages',
      emoji: '💬',
    },
    {
      title: 'Web Development',
      color: 'webdev',
      emoji: '🌐',
    },
    {
      title: 'Semantic Web',
      color: 'semanticweb',
      emoji: '🔗',
    },
    {
      title: 'Statistics',
      color: 'dataengineering',
      emoji: '🔧',
    },
    // {
    //     title: 'Data Science',
    //     color: 'datascience',
    //     emoji: '📊',
    // },
    {
      title: 'Databases',
      color: 'databases',
      emoji: '🗄️',
    },
    {
      title: 'System administration',
      color: 'sysadmin',
      emoji: '🔌',
      // emoji: '🕹️',
    },
    {
      title: 'Tools',
      color: 'tools',
      emoji: '🔨',
    },
  ]
import React from "react";
import { Paragraph } from './components/StyledComponents';
import LinkOut from "./components/LinkOut";
import LinkPara from './components/LinkPara';


// The short intro text placed at the top of the website
export const short_intro_text = <Paragraph>
Research data scientist with interests in Semantic Web standards (RDF, SPARQL, OWL ontologies, SHACL, RML) and open science, working on knowledge graphs for research software.
</Paragraph>

// A longer text about me, experiences and motivation
export const about_me_text = <>
  <Paragraph>
  Hello! I'm Carlos, and I am one of those human beings who I love to learn from others, science and research. 
  I'm now living in Breda and I work as research data scientist at <LinkPara href="https://www.tudelft.nl/library">TU Delft Library</LinkPara> and <LinkPara href="https://data.4tu.nl/info/en/">4TU.ResearchData</LinkPara>.
   I am a strong advocate of Open science and my research interests involve the usage of semantic web standards, linked data and open science in general.
  </Paragraph>

  <Paragraph>
  </Paragraph>

  <Paragraph>
  I also like writing scientific and technical articles as well as reading other people's work. By writing scientific articles I hope to obtain a PhD degree in Artifical Intelligence and Computer Science.</Paragraph>

  <Paragraph>
  When not dealing with numbers or reading, I’m a happy uncle, a swimmer, a tennis player and, last but not least, a loving supporter of Real Zaragoza football team.
  </Paragraph>

</>

// List of projects
export const projects = [
    {
      title: <LinkOut href="https://www.clariah.nl/projects/fair-data-for-historical-games">🎲 PLAYFAIR</LinkOut>,
      langs: ['python', 'typescript'],
      description: `A knowledge graph (KG) using semantic web technolgies. 
      We defined requirements and improvements to make the most comprehensive database about historical games FAIR, with special attention as to whether the existing tools help enhance data published on the web in digital humanities.`,
      website_url: 'https://druid.datalegend.net/UtrillaGuerreroC/-/stories/PLAYFAIR',
      docs_url: 'https://druid.datalegend.net/UtrillaGuerreroC/playfair',
      git_url: 'https://github.com/MaastrichtU-IDS/play-fair',
    },
    {
      title: <LinkOut href="https://github.com/MaastrichtU-IDS/kg-food">♻️ KG4FOOD</LinkOut>,
      langs: ['python', 'typescript'],
      description: `A KG that integrates data sources from nutritional and food price sources using ISO-FOOD Ontology. The goal is to create a KG to monitor food price and analyse cost affordability of healthy habits over time.`,
      // docs_url: 'https://github.com/MaastrichtU-IDS/kg-food',
      git_url: 'https://github.com/MaastrichtU-IDS/kg-food',
    },
    {
      title: <LinkOut href="https://dsri.maastrichtuniversity.nl">🌐 DSRI</LinkOut>,
      langs: ['docker', 'kubernetes'],
      description: `The Data Science Research Infrastructure (DSRI) is a Kubernetes/OpenShift cluster for academic researchers to deploy Data Science workspaces and services,
      such as JupyterHub, RStudio, or VisualStudio Code server.`,
      website_url: 'https://dsri.maastrichtuniversity.nl',
      docs_url: 'https://dsri.maastrichtuniversity.nl',
      git_url: 'https://github.com/MaastrichtU-IDS/dsri-documentation',
    },
    {
      title: <LinkOut href="https://library.maastrichtuniversity.nl/research/rdm/rdm-and-fair/">🔭 CDDI</LinkOut>,
      langs: ['java', 'python'],
      description: `The Community Data Driven Insight (CDDI) is a project that implemented FAIR research data and software management strategies with digital techniques across research communities.`,
      // website_url: 'https://dsri.maastrichtuniversity.nl',
      docs_url: 'https://doi.org/10.3897/rio.8.e96082',
      // git_url: 'https://github.com/MaastrichtU-IDS/dsri-documentation',
    },
    {
      title: <LinkOut href="https://maastrichtu-ids.github.io/projects">💨 IDS research project directory</LinkOut>,
      langs: ['docker', 'typescript'],
      description: `Co-developed a web service to insert projects from the Institute of Data Science (IDS) and its information from git repositories, alongside with generating JSON file using DOAP schema.`,
      // website_url: 'https://dsri.maastrichtuniversity.nl',
      docs_url: 'https://maastrichtu-ids.github.io/best-practices/docs/ids-projects#what-is-the-ids-projects-dashboard',
      git_url: 'https://github.com/MaastrichtU-IDS/projects',
    },
    {
      title: <LinkOut href="https://datasharingcoalition.eu/2022/qa-with-maastricht-university-institute-of-data-science/">🚀 DSC</LinkOut>,
      langs: ['docker', 'python'],
      description: `The Data Sharing Coalition (DSC) aims at increasing awareness from industry about data standards and interoperability cross-sectorial. I was particularly involved in building a knowledge base from texts about human trafficking data.`,
      website_url: 'https://datasharingcoalition.eu/',
      docs_url: 'https://datasharingcoalition.eu/2022/qa-with-maastricht-university-institute-of-data-science/',
      // git_url: 'https://github.com/MaastrichtU-IDS/dsri-documentation',
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
as well as building communities and standards for research data management and software best practices. 
Previously, I had also worked in industry as data scientist on project funded 
by the <LinkPara href="https://www.esa.int/">European Space Agency (ESA)</LinkPara> and the <LinkPara href="https://www.eib.org/en/index.htm">European Investment Bank (EIB)</LinkPara> related to data integration, visualisation and statistical analysis. 
Check all archived research projects in this Github repository <LinkPara href="https://carlosug.github.io/researchblog/">(@carlosug)</LinkPara> or on this <LinkPara href="/researchprojects.pdf">PDF</LinkPara>.
</Paragraph>
</>

export const courses = [
    {
      title:  <LinkOut href="https://esciencecenter-digital-skills.github.io/2020-10-19-Data-Carpentry-with-R/">🎲 Software and Data Carpentry workshops</LinkOut>,
      langs: ['python', 'Docker'],
      description: `Introduction to data science with Python and R for researchers of social science (2020, two-days workshop at Netherlands eScience Center).`,
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
      description: `Data science in R for bachelor students in the applied data science minor.`,
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
  <Paragraph>
I am an official Instructor in <LinkPara href="https://carpentries.org/instructors/ ">The Carpentries Open Science Community</LinkPara> and co-supervised three BSc/MSc student projects related to semantic technologies and network science.
</Paragraph>

<Paragraph>
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
      competency: 2,
      category: ['Semantic Web'],
    },
    {
      title: 'Bash',
      competency: 1,
      category: ['Languages', 'Tools'],
    },
    {
      title: 'Linux',
      competency: 2,
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
      competency: 1,
      category: ['Languages', 'Web Development'],
    },
    {
      title: 'React',
      competency: 1,
      category: ['Web Development'],
    },
    {
      title: 'Material UI',
      competency: 1,
      category: ['Web Development'],
    },
    {
      title: 'HTML/CSS',
      competency: 2,
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
      title: 'Kubernetes',
      competency: 1,
      category: ['System administration', 'Tools'],
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
      competency: 2,
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
      competency: 1,
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
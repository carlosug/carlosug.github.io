import React from 'react';
import { useTheme } from '@mui/material/styles';
import { Container, Box, Typography, Grid, Icon, Stack, Tooltip, IconButton, CardActions, CardContent, CardHeader, Card, Link, Button } from "@mui/material";
import LinearProgress from '@mui/material/LinearProgress';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GoToWebsiteIcon from '@mui/icons-material/OpenInBrowser';
import DocsIcon from '@mui/icons-material/MenuBook';
import PDFIcon from '@mui/icons-material/PictureAsPdf';
import PipIcon from '@mui/icons-material/ViewInAr';

// @ts-ignore
import OrcidIcon from '../images/orcid_logo.svg';
// @ts-ignore
import GoogleScholarIcon from '../images/google_scholar_logo.svg';
// @ts-ignore
import RgIcon from '../images/researchgate_logo.svg';
// @ts-ignore
import slideIcon from '../images/slideshare.png';
import emailIcon from '../images/mail-142.png';

import CodeChip from '../components/CodeChip';
import { Title, Paragraph } from '../components/StyledComponents';
import { short_intro_text, about_me_text, projects, courses, supervising, skills, past_text, skillsCategories } from '../content';
import Seo from '../components/layout/seo';
import LinkOut from "../components/LinkOut";
import LinkPara from '../components/LinkPara';
import ProfileButton from "../components/ProfileButton";
import { FC } from '../utils/types';
// import MyMarkdown from "../components/MyMarkdown";
// import MyMarkdown from "../components/MyMarkdown";




const IndexPage: FC = () => {
  const theme = useTheme();

  const [state, setState] = React.useState({
    filterSkills: 'all',
    dialogOpen: false,
    project_license: '',
    language_autocomplete: [],
  });
  const stateRef = React.useRef(state);
  // Avoid conflict when async calls
  const updateState = React.useCallback((update) => {
    stateRef.current = {...stateRef.current, ...update};
    setState(stateRef.current);
  }, [setState]);

  return(
    <Container className='mainContainer'>
      <Seo title="Home" />

      {/* <Title>
        Online profiles
      </Title> */}

      <Card style={{display: 'inline-block', padding: theme.spacing(2)}}>
        <Stack direction={{xs: "column", md: "row"}} spacing={2} alignItems="center" justifyContent="center">
          <ProfileButton label='CV'
            tooltip='Curriculum Vitæ'
            href="/cv_carlos_utrilla-guerrero.pdf"
            color="error"
            icon={<PDFIcon />}
          />
          <ProfileButton label='carlosug'
            tooltip='GitHub profile'
            href="https://github.com/carlosug"
            color="warning"
            icon={<GitHubIcon />}
          />
          <ProfileButton label='carlos utrilla guerrero'
            tooltip='LinkedIn profile'
            href="https://www.linkedin.com/in/carlos-utrilla-guerrero-97ba7b31/"
            color="info"
            icon={<LinkedInIcon />}
          />
          <ProfileButton label='0000-0002-9994-1462'
            tooltip='ORCID profile'
            href="https://orcid.org/0000-0002-9994-1462"
            color="success"
            icon={<Icon style={{display: 'flex', marginLeft: theme.spacing(1)}}>
              <img src={OrcidIcon} />
            </Icon>}
          />
                    <ProfileButton label='c.utrilla.guerrero@gmail.com'
            tooltip='Gmail account'
            href="c.utrilla.guerrero@gmail.com"
            color="secondary"
            icon={<Icon style={{display: 'flex', marginLeft: theme.spacing(1)}}>
              <img src={emailIcon} />
            </Icon>}
          />
          {/* <ProfileButton label='Solid pod'
            tooltip='SOLID pod (Social Linked Data)'
            href="https://carlosug.solidcommunity.net/profile/#me"
            color="info"
            icon={<Icon style={{display: 'flex', marginLeft: theme.spacing(1)}}>
              <img src={SolidIcon} />
            </Icon>}
          /> */}
        </Stack>
      </Card>

      <div style={{marginTop: theme.spacing(3), textAlign: 'center'}}>
        {short_intro_text}
      </div>



      <Title id='publications'>
        📚️ Publications
      </Title>


      <Card style={{display: 'inline-block', padding: theme.spacing(2)}}>
        <Stack direction={{xs: "column", md: "row"}} spacing={2} alignItems="center" justifyContent="center">
          <ProfileButton label='Google Scholar'
            tooltip='Publications on Google Scholar'
            href="https://scholar.google.com/citations?user=dpMY-4cAAAAJ&hl"
            color="warning"
            icon={<Icon style={{display: 'flex', marginLeft: theme.spacing(1)}}>
              <img src={GoogleScholarIcon} />
            </Icon>}
          />
          <ProfileButton label='Research Gate'
            tooltip='Publications on Research Gate'
            href='https://www.researchgate.net/profile/Carlos-Utrilla-Guerrero'
            color='yellow'
            icon={<Icon style={{display: 'flex', marginLeft: theme.spacing(1)}}>
              <img src={RgIcon} />
            </Icon>}
          />
                    <ProfileButton label='Slideshare'
            tooltip='Publications on Slideshare'
            href='https://www.slideshare.net/CarlosUtrillaGuerrer1'
            color='success'
            icon={<Icon style={{display: 'flex', marginLeft: theme.spacing(1)}}>
              <img src={slideIcon} />
            </Icon>}
          />
        </Stack>
      </Card>


      <Title id='projects' fontWeight='bold'>
      🔬 Latest research projects
      </Title>

      <Grid container spacing={2} alignItems="stretch">
        { projects.map((project: any, key: number) => (
          <Grid item xs={12} md={4}>
            <Card style={{display: 'inline-block', textAlign: 'center', height: '100%'}}>
              <CardHeader
                // avatar={<GitHubIcon />}
                title={project.title}
                titleTypographyProps={{fontSize:'1.1rem', fontFamily:'Roboto'}}
                // titleTypographyProps={{variant: 'subtitle1', style: {fontSize: '1.1rem'} }}
                subheader={<>
                  { project.langs.map((lang: any, key: number) => (
                    <CodeChip lang={lang} key={key}/>
                  ))}
                </>}
                style={{paddingBottom: '0px', textAlign: 'center'}}
              />
              <CardContent style={{paddingBottom: '0px', paddingTop: theme.spacing(1)}}>
                <Typography variant="body2">
                  {project.description}
                </Typography>
              </CardContent>
              <CardActions disableSpacing style={{display: 'block', paddingTop: '0px', textAlign: 'center'}}>
                { project.website_url &&
                  <Tooltip title='Go to the website'>
                    <a href={project.website_url} target='_blank'>
                      <IconButton aria-label="Go to website">
                        <GoToWebsiteIcon />
                      </IconButton>
                    </a>
                  </Tooltip>
                }
                { project.docs_url &&
                  <Tooltip title='Documentation'>
                    <a href={project.docs_url} target='_blank'>
                      <IconButton aria-label="Go to documentation">
                        <DocsIcon />
                      </IconButton>
                    </a>
                  </Tooltip>
                }
                { project.git_url &&
                  <Tooltip title='Source code on GitHub'>
                    <a href={project.git_url} target='_blank'>
                      <IconButton aria-label="GitHub link">
                        <GitHubIcon />
                      </IconButton>
                    </a>
                  </Tooltip>
                }
                { project.pip_url &&
                  <Tooltip title='ArXiv pre-print'>
                    <a href={project.pip_url} target='_blank'>
                      <IconButton aria-label="Pip link">
                        <PipIcon />
                      </IconButton>
                    </a>
                  </Tooltip>
                }
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>


      <div style={{marginTop: theme.spacing(3), textAlign: 'center'}}>
        {past_text}
      </div>



      <Title id='courses'>
      🎭 Teaching and supervising
      </Title>

      <Grid container spacing={2} alignItems="stretch">
        { courses.map((course: any, key: number) => (
          <Grid item xs={12} md={4}>
            <Card style={{display: 'inline-block', textAlign: 'center', height: '100%'}}>
              <CardHeader
                // avatar={<GitHubIcon />}
                title={course.title}
                titleTypographyProps={{fontSize: '1.1rem'}}
                // titleTypographyProps={{variant: 'subtitle1', style: {fontSize: '1.1rem'} }}
                subheader={<>
                  { course.langs.map((lang: any, key: number) => (
                    <CodeChip lang={lang} key={key}/>
                  ))}
                </>}
                style={{paddingBottom: '0px', textAlign: 'center'}}
              />
              <CardContent style={{paddingBottom: '0px', paddingTop: theme.spacing(1)}}>
                <Typography variant="body2">
                  {course.description}
                </Typography>
              </CardContent>
              <CardActions disableSpacing style={{display: 'block', paddingTop: '0px', textAlign: 'center'}}>
                { course.website_url &&
                  <Tooltip title='Go to the website'>
                    <a href={course.website_url} target='_blank'>
                      <IconButton aria-label="Go to website">
                        <GoToWebsiteIcon />
                      </IconButton>
                    </a>
                  </Tooltip>
                }
                { course.docs_url &&
                  <Tooltip title='Documentation'>
                    <a href={course.docs_url} target='_blank'>
                      <IconButton aria-label="Go to documentation">
                        <DocsIcon />
                      </IconButton>
                    </a>
                  </Tooltip>
                }
                { course.git_url &&
                  <Tooltip title='Source code on GitHub'>
                    <a href={course.git_url} target='_blank'>
                      <IconButton aria-label="GitHub link">
                        <GitHubIcon />
                      </IconButton>
                    </a>
                  </Tooltip>
                }
                { course.pip_url &&
                  <Tooltip title='Python library on PyPI'>
                    <a href={course.pip_url} target='_blank'>
                      <IconButton aria-label="Pip link">
                        <PipIcon />
                      </IconButton>
                    </a>
                  </Tooltip>
                }
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>

      <div style={{marginTop: theme.spacing(3), textAlign: 'center'}}>
        {supervising}
      </div>


      <Title id="about">
        💬 About me
      </Title>

      {about_me_text}

      <Title id="skills">
        🛠️ Technical skills
      </Title>

      <Paragraph style={{textAlign: 'center'}}>
        The displayed scores are obviously subjective, please refer to my <LinkPara href="/cv_carlos_utrilla-guerrero.pdf">🗂️ CV</LinkPara> for a better account of how those skills were used.
      </Paragraph>

      <Button variant="text" color="inherit" onClick={() => { updateState({ filterSkills: 'all'}) }} style={{textTransform: 'none'}}>
        💥 All
      </Button>
      { skillsCategories.map((cat: any, key: number) => (
        <Button variant="text" color={cat.color} style={{textTransform: 'none'}}
        onClick={() => { updateState({ filterSkills: cat.title}) }}>
          {cat.emoji} {cat.title}
        </Button>
      ))}

      <Grid container spacing={2} alignItems="stretch" style={{marginTop: theme.spacing(1)}}>
        { skills.map((skill: any, key: number) => {
          const cat: any = skillsCategories.filter(obj => { return obj.title === skill.category[0]; })[0]
          return (<>
            { (state.filterSkills == 'all' || skill.category.includes(state.filterSkills)) &&
            <Grid item xs={12} md={4}>
              <Card style={{textAlign: 'left', height: '100%', padding: theme.spacing(2)}}>
                <CardContent style={{padding: '0px'}}>
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    {/* ##ch is the size of the largest skill name */}
                    <Typography variant="body2" style={{width: '20ch'}}>
                      {skill.title}
                    </Typography>
                    <Box sx={{ width: '100%', mr: 1 }}>
                      <LinearProgress variant="determinate"
                        value={skill.competency*20}
                        color={cat.color}
                      />
                    </Box>
                    <Box sx={{ minWidth: 35 }}>
                      <Typography variant="body2" color="text.secondary">{skill.competency}/5</Typography>
                    </Box>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          }
        </>)}
        )}
      </Grid>

      {/* <MyMarkdown>
       Trying markdown
      </MyMarkdown> */}

    </Container>
  )
}
export default IndexPage;
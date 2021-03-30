const fetch = require('node-fetch');
const os = require('os');

module.exports = async function data(req, res) {
  const baseUrl = process.env.VERCEL_URL || 'http://localhost:8080';
  const url = `http://${baseUrl}/README.md`;
  const response = await fetch(url);
  const readme = await response.text();

  res.json({
    readme,
    authors: [
      { name: 'Rolfe Hasse', email: 'rolfe.hasse@example.com' },
      { name: 'Josefina Campbell', email: 'josefina.campbell@example.com' },
    ],
    github: {
      name: 'pyclesperanto-assistant',
      repo: 'https://github.com/clesperanto/napari_pyclesperanto_assistant',
      stars: 305,
      forks: 29,
      issues: 100,
      pullRequests: 78,
    },
    devStatus: '4 - Beta',
    firstRelease: '21 May 2018',
    license: 'BSD License (BSD-3)',
    operatingSystems: ['Linux', 'MacOS'],
    releaseDate: '04 September 2020',
    requirements: 'Python >= 3.7',
    version: '0.7.2',
    versions: ['Python 3'],
    tags: [
      'Software development',
      'Testing',
      'Segmentation',
      'Cells',
      'Nuclei',
      'Cytoplasm',
      'Coloration',
      'Contrast',
      'Denoising',
      'Annotation',
      'Biology',
      'Analysis',
    ],
  });
};

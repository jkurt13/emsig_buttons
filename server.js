const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 5000;


app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

let dataArray = [
    {
      name: '19010803',
      description: 'PALERMO DISTRESSED POLYESTER METAL RIM',
      url: '19010803%20PALERMO%20DISTRESSED%20POLYESTER%20METAL%20RIM.jpg'
    },
    {
      name: '13111316',
      description: 'A2758 A2759 A3600 A3611 A3781 GROMMET FISHEYE DISTRESSED ENAMEL',
      url: '13111316%20A2758%20A2759%20A3600%20A3611%20A3781%20GROMMET%20FISHEYE%20DISTRESSED%20ENAMEL.jpg'
    },
    {
      name: '19022502',
      description: 'RENESAN SD DISTRESSED POLYESTER',
      url: '19022502%20RENESAN%20SD%20DISTRESSED%20POLYESTER.jpg'
    },
    {
      name: '19031401',
      description: 'A4391 DISTRESSED ANCHOR',
      url: '19031401%20A4391%20DISTRESSED%20ANCHOR.jpg'
    },
    {
      name: '19032901',
      description: 'ELY209 DISTRESSED ENAMEL',
      url: '19032901%20ELY209%20DISTRESSED%20ENAMEL.jpg'
    },
    {
      name: '19041503',
      description: 'CASTELLO DISTRESSED WEATHERED BURNT POLYESTER',
      url: '19041503%20CASTELLO%20DISTRESSED%20WEATHERED%20BURNT%20POLYESTER.jpg'
    },
    {
      name: '19041507',
      description: 'CINQUE SD DISTRESSED WEATHERED POLYESTER',
      url: '19041507%20CINQUE%20SD%20DISTRESSED%20WEATHERED%20POLYESTER.jpg'
    },
    {
      name: '20021201',
      description: 'TT CLR CARD (ITOCHU)',
      url: '20021201%20TT%20CLR%20CARD%20(ITOCHU).jpg'
    },
    {
      name: '20021301',
      description: 'PRANZA SD FAUX HORN',
      url: '20021301%20PRANZA%20SD%20FAUX%20HORN.jpg'
    },
    {
      name: '20021807',
      description: 'SQ213801 A4306 ELY249 WHTR085 ABS CREST',
      url: '20021807%20SQ213801%20A4306%20ELY249%20WHTR085%20ABS%20CREST.jpg'
    },
    {
      name: '20022801',
      description: 'BELLOY SD FAUX HORN',
      url: '20022801%20BELLOY%20SD%20FAUX%20HORN.jpg'
    },
    {
      name: '20031201',
      description: '3393 3389 3392 BW048261 - BUTTONS & BUCKLE',
      url: '20031201%203393%203389%203392%20BW048261%20-%20BUTTONS%20&%20BUCKLE.jpg'
    },
    {
      name: '20060101',
      description: 'A1808 - STITCHED RIM COLOR FAUX WOOD',
      url: '20060101%20A1808%20-%20STITCHED%20RIM%20COLOR%20FAUX%20WOOD.jpg'
    },
    {
      name: '20060102',
      description: 'A4453 HAMMERED METAL SHANK BUTTON',
      url: '20060102%20A4453%20HAMMERED%20METAL%20SHANK%20BUTTON.jpg'
    },
    {
      name: '20060103',
      description: 'TAC009 TACK BUTTON',
      url: '20060103%20TAC009%20TACK%20BUTTON.pdf'
    }
  ]

// API calls
app.get('/users', (req, res) => {
  res.json({ data: dataArray });
});


if (process.env.NODE_ENV === 'production') {
  // Serve any static files
  app.use(express.static(path.join(__dirname, 'client/build')));
    
  // Handle React routing, return all requests to React app
  app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
  });
}

app.listen(port, () => console.log(`Listening on port ${port}`));
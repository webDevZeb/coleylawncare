import React from 'react'
import cleanUpIcon from '../assets/clean-icon.png'
import hammerIcon from '../assets/hammericon.png'
import trashIcon from '../assets/trash-icon.png'
import lawnmowerIcon from '../assets/lawnmowericon.png'
import leafIcon from '../assets/leaf-icon.png'
import fertilizerIcon from '../assets/fertilizer-icon.png'
import scissorsIcon from '../assets/scissors-icon.png'
import pressureIcon from '../assets/pressureIcon.png'

const serviceData = [
  {
    service: 'Clean Up',
    description:
      'Our professional clean-up service will transform your outdoor space, removing debris, leaves, and other unsightly elements to create a neat and organized landscape.',
    image: cleanUpIcon,
    id: '1',
  },
  {
    service: 'Handyman Work',
    description:
      "Need help with small repairs or maintenance tasks? Our skilled handyman team is here to assist you, whether it's fixing fences, installing outdoor fixtures, or handling other handyman projects.",
    image: hammerIcon,
    id: '2',
  },
  {
    service: 'Junk Removal',
    description:
      'Say goodbye to unwanted junk and clutter in your yard. Our junk removal service efficiently and responsibly clears away debris, old furniture, and other items, leaving you with a outdoor area.',
    image: trashIcon,
    id: '3',
  },
  {
    service: 'Mowing',
    description:
      'Our professional mowing service is designed to keep your lawn looking neat and well-maintained. We have a team of experienced lawn care specialists who will ensure your grass is cut to the ideal height, providing a clean and manicured appearance.',
    image: lawnmowerIcon,
    id: '4',
  },
  {
    service: 'Leaf Removal',
    description:
      'As seasons change, leaves can accumulate and make your yard look messy. Our leaf removal service ensures a pristine landscape by efficiently raking and removing leaves, leaving your property looking immaculate.',
    image: leafIcon,
    id: '5',
  },
  {
    service: '  Fertilize & Mulch',
    description:
      'Boost the health and vitality of your plants and garden beds with our fertilizing and mulching service. We use high-quality products to nourish your soil, promote plant growth, and enhance the appearance of your landscape.',
    image: fertilizerIcon,
    id: '6',
  },
  {
    service: '  Pressure Washing',
    description:
      'Restore the beauty of your outdoor surfaces with our pressure washing service. We effectively remove dirt, grime, mold, and other stains from driveways, sidewalks, decks, and other outdoor surfaces, leaving them clean and revitalized.',
    image: pressureIcon,
    id: '7',
  },
  {
    service: 'Trimming & Removal',
    description:
      'Our skilled team of professionals will expertly trim and shape your shrubs, hedges, and trees, giving them a well-groomed and visually appealing appearance. We also offer tree removal services when necessary.',
    image: scissorsIcon,
    id: '8',
  },
]
export default serviceData

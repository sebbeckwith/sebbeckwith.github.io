import postOfficeLogo from '../../Post_Office_Logo.svg'
import gdasLogo from '../../gdas_logo.png'
import winningHeartsAndMindsLogo from '../../winning_hearts_and_minds_logo.png'
import flanneryLogo from '../../flannery_logo.png'
import imagineerLogo from '../../Imagineer_logo.png'
import tlapLogo from '../../TLAP_ logo.png'
import nffLogo from '../../NFF_Logo.png'
import inchargeLogo from '../../incharge_logo.jpg'
import cpcLogo from '../../CPC_logo.png'
import supportingPositivelyLogo from '../../supporting_positively_logo.png'

export type ClientLogo = {
  src: string
  name: string
  alt: string
}

export const clientLogos: ClientLogo[] = [
  { src: gdasLogo, name: 'GDAS', alt: 'GDAS logo' },
  { src: winningHeartsAndMindsLogo, name: 'Winning Hearts and Minds', alt: 'Winning Hearts and Minds logo' },
  { src: postOfficeLogo, name: 'Post Office', alt: 'Post Office logo' },
  { src: flanneryLogo, name: 'Flannery', alt: 'Flannery logo' },
  { src: imagineerLogo, name: 'Imagineer', alt: 'Imagineer logo' },
  { src: tlapLogo, name: 'Think Local Act Personal', alt: 'Think Local Act Personal logo' },
  { src: nffLogo, name: 'NFF', alt: 'NFF logo' },
  { src: inchargeLogo, name: 'In Control', alt: 'In Control logo' },
  { src: cpcLogo, name: 'CPC', alt: 'CPC logo' },
  { src: supportingPositivelyLogo, name: 'Supporting Positively', alt: 'Supporting Positively logo' },
]

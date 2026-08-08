import Nav from '../../components/Nav';
import Footer from '../../components/Footer';

export const metadata = {
  title: 'חנות FITCOR | יצחק עזרן אימון אישי',
  description: 'ביגוד וציוד FITCOR — עיצוב שחור-זהב, BUILT BY DISCIPLINE.',
};

const products = [
  { img: '/images/products/fitcor-shirt-longsleeve.jpg', title: 'חולצת אימון FITCOR — שרוול ארוך', desc: 'בד דריי-פיט נושם, לוגו FC רקום בזהב.' },
  { img: '/images/products/fitcor-jersey-sleeveless.jpg', title: 'גופיית אימון FITCOR', desc: 'גזרה אתלטית ללא שרוולים, נושמת לאימון עצים.' },
  { img: '/images/products/fitcor-bottle.jpg', title: 'בקבוק שתייה FITCOR', desc: 'בקבוק ספורט ממותג, איכות פרימיום.' },
  { img: '/images/products/fitcor-cap.jpg', title: 'כובע מצחייה FITCOR Classic', desc: 'עיצוב קלאסי, לוגו FC וזהב על שחור.' },
];

export default function Store() {
  return (

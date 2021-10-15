import kartikDP from '../../assets/kartik.png';
import kentDP from '../../assets/kent.png';
import markDP from '../../assets/mark.png';
import kmPostImage from '../../assets/master-react-native.jpg';
import kcdPostImage from '../../assets/kcd.jpg';
import markPostImage from '../../assets/mark.jpg';
import EntypoIcons from 'react-native-vector-icons/Entypo';
import FontistoIcons from 'react-native-vector-icons/Fontisto';
import AntDesignIcons from 'react-native-vector-icons/AntDesign';

export const POSTS = [
  {
    profileImage: kartikDP,
    name: 'Kartik Malik',
    title: 'Javascript developer',
    image: kmPostImage,
  },
  {
    profileImage: kentDP,
    name: 'Kent C Dodds',
    title: 'Software Engineer Educator',
    image: kcdPostImage,
  },
  {
    profileImage: markDP,
    name: 'Mark Erikson',
    title: 'Redux maintainer',
    image: markPostImage,
  },
];

export const actionTitles = {
  LIKE: 'Like',
  COMMENT: 'Comment',
  SHARE: 'Share',
};

export const ACTIONS = [
  {
    iconFamily: AntDesignIcons,
    iconName: 'like2',
    title: actionTitles.LIKE,
  },
  {
    iconFamily: FontistoIcons,
    iconName: 'comment',
    title: actionTitles.COMMENT,
  },
  {
    iconFamily: EntypoIcons,
    iconName: 'share',
    title: actionTitles.SHARE,
  },
];

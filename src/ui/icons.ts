import alignLeftIcon from '../assets/icons/align-left.svg?raw';
import alignCenterIcon from '../assets/icons/align-center.svg?raw';
import alignRightIcon from '../assets/icons/align-right.svg?raw';
import alignJustifyIcon from '../assets/icons/align-justify.svg?raw';
import backgroundIcon from '../assets/icons/background.svg?raw';
import blockquoteIcon from '../assets/icons/blockquote.svg?raw';
import boldIcon from '../assets/icons/bold.svg?raw';
import cleanIcon from '../assets/icons/clean.svg?raw';
import codeIcon from '../assets/icons/code.svg?raw';
import colorIcon from '../assets/icons/color.svg?raw';
import directionLeftToRightIcon from '../assets/icons/direction-ltr.svg?raw';
import directionRightToLeftIcon from '../assets/icons/direction-rtl.svg?raw';
import formulaIcon from '../assets/icons/formula.svg?raw';
import headerIcon from '../assets/icons/header.svg?raw';
import header2Icon from '../assets/icons/header-2.svg?raw';
import header3Icon from '../assets/icons/header-3.svg?raw';
import header4Icon from '../assets/icons/header-4.svg?raw';
import header5Icon from '../assets/icons/header-5.svg?raw';
import header6Icon from '../assets/icons/header-6.svg?raw';
import italicIcon from '../assets/icons/italic.svg?raw';
import imageIcon from '../assets/icons/image.svg?raw';
import indentIcon from '../assets/icons/indent.svg?raw';
import outdentIcon from '../assets/icons/outdent.svg?raw';
import linkIcon from '../assets/icons/link.svg?raw';
import listBulletIcon from '../assets/icons/list-bullet.svg?raw';
import listCheckIcon from '../assets/icons/list-check.svg?raw';
import listOrderedIcon from '../assets/icons/list-ordered.svg?raw';
import subscriptIcon from '../assets/icons/subscript.svg?raw';
import superscriptIcon from '../assets/icons/superscript.svg?raw';
import strikeIcon from '../assets/icons/strike.svg?raw';
import tableIcon from '../assets/icons/table.svg?raw';
import underlineIcon from '../assets/icons/underline.svg?raw';
import videoIcon from '../assets/icons/video.svg?raw';

export default {
  align: {
    '': alignLeftIcon,
    center: alignCenterIcon,
    right: alignRightIcon,
    justify: alignJustifyIcon,
  },
  background: backgroundIcon,
  blockquote: blockquoteIcon,
  bold: boldIcon,
  clean: cleanIcon,
  code: codeIcon,
  'code-block': codeIcon,
  color: colorIcon,
  direction: {
    '': directionLeftToRightIcon,
    rtl: directionRightToLeftIcon,
  },
  formula: formulaIcon,
  header: {
    '1': headerIcon,
    '2': header2Icon,
    '3': header3Icon,
    '4': header4Icon,
    '5': header5Icon,
    '6': header6Icon,
  },
  italic: italicIcon,
  image: imageIcon,
  indent: {
    '+1': indentIcon,
    '-1': outdentIcon,
  },
  link: linkIcon,
  list: {
    bullet: listBulletIcon,
    check: listCheckIcon,
    ordered: listOrderedIcon,
  },
  script: {
    sub: subscriptIcon,
    super: superscriptIcon,
  },
  strike: strikeIcon,
  table: tableIcon,
  underline: underlineIcon,
  video: videoIcon,
};

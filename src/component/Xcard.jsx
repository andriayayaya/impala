// import React from 'react';
// import { makeStyles, useTheme } from '@material-ui/core/styles';
// import Card from '@material-ui/core/Card';
// import CardContent from '@material-ui/core/CardContent';
// import CardMedia from '@material-ui/core/CardMedia';
// import IconButton from '@material-ui/core/IconButton';
// import Typography from '@material-ui/core/Typography';
// import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
// import PlayArrowIcon from '@material-ui/icons/PlayArrow';
// import SkipNextIcon from '@material-ui/icons/SkipNext';
// import Button from '@material-ui/core/Button';

// const useStyles = makeStyles(theme => ({
//   card: {
//     display: 'flex',
//   },
//   details: {
//     display: 'flex',
//     flexDirection: 'column',
//   },
//   content: {
//     flex: '1 0 auto',
//   },
//   cover: {
//     width: 151,
//   },
//   controls: {
//     display: 'flex',
//     alignItems: 'center',
//     paddingLeft: theme.spacing(1),
//     paddingBottom: theme.spacing(1),
//   },
//   playIcon: {
//     height: 38,
//     width: 38,
//   },
// }));

//  function A5Card() {
//   const classes = useStyles();
//   const theme = useTheme();

//   return (
//     <Card className={classes.card}>
//          <CardMedia
//         className={classes.cover}
//         image="meeting.jpeg"
//         title="Impala"
//       />
//       <div className={classes.details}>
//         <CardContent className={classes.content}>
//           <Typography component="body" variant="body">
//             Exclutive boardroom - axa tower
//           </Typography>
//           <Button size="small" variant="contained" color="secondary" className={classes.button}>
//             Rp.30.000/
//          </Button>
//         </CardContent>
//       </div>
//     </Card>
//   );
// }
// export default  A5Card;
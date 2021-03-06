/**
 * shortcut rafc
 */
import React from 'react'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import Avatar from '@material-ui/core/Avatar'
import IconButton from '@material-ui/core/IconButton'
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardActions from '@material-ui/core/CardActions';
import { toPascalCase } from '../../utils/strings'

import './book-card.css';
import { Link } from 'react-router-dom'


// export const BookCard = ({book, className, onCartClick}) => {
export class BookCard extends React.PureComponent {

  render() {
    const {book, className, onCartClick} = this.props;
    console.log('Update BookCard!');

    return (
      <Card className={`book-card ${className}`}>
        <Link to={`/detail/${book.id}`} className="card-link">
          <CardHeader
            avatar={
              <Avatar aria-label="recipe" className="book-card-avatar" style={{backgroundColor: 'green'}}>
                {book.title[0]}
              </Avatar>
            }
            title={book.title}
            subheader={toPascalCase(book.author)}
          />
          <CardMedia
            className="book-card-image"
            image={book.cover}
            title="Paella dish"
          />
          <CardContent>
            <Typography variant="body2" color="textSecondary" component="p">
              {book.description}
            </Typography>
          </CardContent>
        </Link>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="share" onClick={() => onCartClick(book)}>
            <ShoppingCartIcon />
          </IconButton>
        </CardActions>
      </Card>
    )
  }
}

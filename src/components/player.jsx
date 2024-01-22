import { useGetPlayerInfoQuery } from "../api/puppyBowlApi";
// import { PropTypes } from "prop-types";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useParams, useNavigate } from "react-router-dom";

const Player = () => {
  const { playerId } = useParams();
  const navigate = useNavigate();
  const { data, error, isLoading } = useGetPlayerInfoQuery(playerId);

  if (isLoading) return <div>Loading... </div>;
  if (error) return <div>Error: {error.message}</div>;
  if (!data) return null;
  console.log(data);
  const player = data.data.player;

  const goBack = () => {
    navigate('/');
  };

  return (
    <Card sx={{ maxWidth: 1000}}>
      <CardMedia
        sx={{ height: 500, width:450 }}
        image={player.imageUrl}
        title={`${player.name}`}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {player.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Breed: {player.breed}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Status: {player.status}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Team: {player.team?.name ?? "N/A"}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Team Score: {player.team?.score ?? "N/A"}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={goBack}>Go Back</Button>
      </CardActions>
    </Card>
  );
};

// Player.propTypes = {
//   playerId: PropTypes.number.isRequired,
// };

export default Player;

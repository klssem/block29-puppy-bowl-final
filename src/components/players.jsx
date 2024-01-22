import {
  useGetPlayersQuery,
  useDeletePlayerMutation,
} from "../api/puppyBowlApi";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Unstable_Grid2"; // Grid version 2
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Players = () => {
  const { data, error, isLoading } = useGetPlayersQuery();
  const [deletePlayer] = useDeletePlayerMutation();

  const searchQuery = useSelector((state) => state.search.query);
  // Filter players based on the search query
  const filteredPlayers = data?.data?.players.filter((player) =>
    player.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleDelete = async (playerId) => {
    try {
      await deletePlayer(playerId).unwrap();
    } catch (error) {
      console.log("Failed to delete player: ", error);
    }
  };
  if (isLoading) return <div>Loading... </div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <h1>Puppy Bowl</h1>
      <Grid container rowSpacing={3} columnSpacing={{ xs: 8, sm: 15, md: 28 }}>
        {filteredPlayers?.map((player) => (
          <Grid key={player.id} xs={6} sm={4} md={1}>
            <Card sx={{ maxWidth: 350, width:200, height: 400 }}>
              <CardMedia
                sx={{ height: 200 }}
                image={player.imageUrl}
                title={`${player.name} image`}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {player.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Breed: {player.breed}
                  <br />
                  Status: {player.status}
                </Typography>
              </CardContent>
              <CardActions>
                <Button
                  size="small"
                  component={Link}
                  to={`/player/${player.id}`}
                >
                  Details
                </Button>
                <Button size="small" onClick={() => handleDelete(player.id)}>
                  Delete
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Players;

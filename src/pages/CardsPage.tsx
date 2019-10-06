import React from 'react';
import RandomMainCard from "../cards/RandomMainCard";
import RandomSubCard from "../cards/RandomSubCard";
import RandomSpecialCard from "../cards/RandomSpecialCard";
import RandomMainInCategoryCard from "../cards/RandomMainInCategoryCard";
import GreetingFromTanimotoCard from "../cards/GreetingFromTanimotoCard";
import RandomMainWithOneChargerCard from "../cards/RandomMainWithOneChargerCard";
import RandomMainInSpecificSubCard from "../cards/RandomMainInSpecificSubCard";
import RandomGearPowerCard from "../cards/RandomGearPowerCard"
import Grid from "@material-ui/core/Grid";

export default function CardsPage() {
	return (
		<Grid
			container
			direction="row"
			justify="space-around"
			alignItems="flex-start"
			spacing={1}>
			<Grid item xs={12} sm={6} md={4}><RandomMainCard /></Grid>
			<Grid item xs={12} sm={6} md={4}><RandomSubCard /></Grid>
			<Grid item xs={12} sm={6} md={4}><RandomSpecialCard /></Grid>
			<Grid item xs={12} sm={6} md={4}><RandomMainWithOneChargerCard /></Grid>
			<Grid item xs={12} sm={6} md={4}><RandomMainInCategoryCard /></Grid>
			<Grid item xs={12} sm={6} md={4}><RandomMainInSpecificSubCard /></Grid>
			<Grid item xs={12} sm={6} md={4}><RandomGearPowerCard /></Grid>
			<Grid item xs={12} sm={6} md={4}><GreetingFromTanimotoCard /></Grid>
		</Grid>
	);
}
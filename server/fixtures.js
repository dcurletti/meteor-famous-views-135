if (Items.find().count() === 0) {
	
	Items.insert({
		name: "Bench Press",
		type: "Strength",
		mainMuscleGroup: "Chest",
		secondaryMuscleGroups: ["Triceps", "Shoulders"],
		mechanics: "Compound",
		equipment: ["Barbell", "Bench"],
		difficulty: "Beginner",
		force: "Push", 
		overallRating: 5
	});

	Items.insert({
		name: "LAT Pulldown",
		type: "Strength",
		mainMuscleGroup: "Back",
		secondaryMuscleGroups: ["Biceps", "Shoulders"],
		mechanics: "Compound",
		equipment: ["Machine"],
		difficulty: "Beginner",
		force: "Push", 
		overallRating: 5
	});

	Items.insert({
		name: "Situp",
		type: "Strength",
		mainMuscleGroup: "Core",
		secondaryMuscleGroups: ["Core"],
		mechanics: "Compound",
		equipment: [],
		difficulty: "Beginner",
		force: "Push", 
		overallRating: 5
	});

	Items.insert({
		name: "Squat",
		type: "Strength",
		mainMuscleGroup: "Legs",
		secondaryMuscleGroups: ["Triceps", "Shoulders"],
		mechanics: "Compound",
		equipment: ["Barbell", "Rack"],
		difficulty: "Intermediate",
		force: "Push", 
		overallRating: 5
	});

};


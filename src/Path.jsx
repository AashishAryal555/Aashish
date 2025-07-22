import React from "react";
import { Route, Routes } from "react-router-dom";

import Layout from "./Layout";

// Day 1
import BackgroundChanger from "./Day 1/BackgroungChanger";

// Day 2
import Array from "./Day 2/Array";
import Calculator from "./Day 2/Calculator";
import Condition from "./Day 2/Condition";
import Multiplication from "./Day 2/Multiplication";
import Variable from "./Day 2/Variable";

// Day 3
import GradeEvaluator from "./Day 3/GradeEvaluator";
import Merge from "./Day 3/Merge";
import ObjectComponent from "./Day 3/Object";
import UserList from "./Day 3/UserList";

// Day 4
import UserCard from "./Day 4/Components/UserCard";
import EmojiPicker from "./Day 4/EmojiPicker";
import Users from "./Day 4/Users";


// Day 5
import Focusinput from "./Day 5/Focusinput";
import LiftingState from "./Day 5/LiftingState";
import LoginForm from "./Day 5/LoginForm";

// Day 6
import NavigationBar from "./Day 6/Component/NavigationBar";
import Home from "./Day 6/Home";
import UserDetails from "./Day 6/UserDetails";
import ViewUser from "./Day 6/ViewUser";

// Day 7
import DayNavigation from "./Day 7/Components/DayNavigation";

// Day 8
import ToDo from "./Day 8/ToDo";

// Day 9
import CompleteForm from "./Day 9/CompleteForm";

import PageNotFound from "./PageNotFound";

export default function Path() {
	return (
		<Routes>
			<Route path="*" element={<PageNotFound />} />
			<Route path="/" element={<Layout />}>

			   {/* Day 1 Routes */}
			   <Route path="/day1/background-changer" element={<BackgroundChanger />} />

				{/* Day 2 Routes */}
				<Route path="/day2/array" element={<Array />} />
				<Route path="/day2/calculator" element={<Calculator />} />
		<Route path="/day2/condition" element={<Condition />} />
				<Route path="/day2/multiplication" element={<Multiplication/>} />
				<Route path="/day2/variable" element={<Variable />} />

				{/* Day 3 Routes */}
	   <Route path="/day3/grade-evaluator" element={<GradeEvaluator />} />
	   <Route path="/day3/merge" element={<Merge />} />
	   <Route path="/day3/object" element={<ObjectComponent />} />
	   <Route path="/day3/user-list" element={<UserList />} />

				{/* Day 4 Routes */}
				<Route path="/day4/components/user-card" element={<UserCard />} />
				<Route path="/day4/emoji-picker" element={<EmojiPicker />} />
				<Route path="/day4/users" element={<Users />} />

				{/* Day 5 Routes */}
	   <Route path="/day5/focus-input" element={<Focusinput />} />
	   <Route path="/day5/lifting-state" element={<LiftingState />} />
	   <Route path="/day5/login-form" element={<LoginForm />} />

				{/* Day 6 Routes */}
		<Route path="/day6/component/navigation-bar" element={<NavigationBar />} />
				<Route path="/day6/home" element={<Home />} />
	   <Route path="/userDetails/:id" element={<UserDetails />} />
		<Route path="/day6/view-user" element={<ViewUser />} />

		{/* Day 7 Routes */}
		<Route path="/day7/components/day-navigation" element={<DayNavigation />} />

				{/* Day 8 Routes */}
		<Route path="/day8/to-do" element={<ToDo />} />

    {/* Day 9 Routes */}
    <Route path="/day9/complete-form" element={<CompleteForm />} />                                                           
			</Route>
		</Routes>
	);
}

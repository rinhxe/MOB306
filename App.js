import {
	StyleSheet,
	Text,
	View,
	ScrollView,
	Button,
	Modal,
	TextInput,
	Pressable,
	SafeAreaView,
	FlatList,
} from "react-native";
import React, { useState } from "react";

export default function App() {
	const [dialogVisible, setDialogVisible] = useState(false);
	let DATA = [
		{
			id: 'PH11111',
			title: 'Just Name'
		},
		{
			id: 'PH11112',
			title: 'Just Name'
		},
	]

	function Item({id,title}){
		return(
			<View style={styles.item}>
				<Text style={styles.textStyle}>{id}</Text>
				<Text style={styles.textStyle}>{title}</Text>
			</View>
		);
	}

	return (
		<ScrollView>
			<View style={styles.centeredView}>
				<Modal animationType="fade" transparent={true} visible={dialogVisible}
					onRequestClose=
					{() => {
						setDialogVisible(!dialogVisible);
					}}>
					<View style={styles.dialogStyle}>
						<Text>Add new record</Text>
						<TextInput style={styles.inputStyle} placeholder="Name"></TextInput>
						<TextInput style={styles.inputStyle} placeholder="Desc"></TextInput>
						<TextInput style={styles.inputStyle} placeholder="Image link"></TextInput>
						<Pressable
							style={[styles.button, styles.buttonOpen]}
							onPress={() => setDialogVisible(false)}>
							<Text style={styles.textStyle}>Close</Text>
						</Pressable>
						<Pressable
							style={[styles.button, styles.buttonOpen]}
							onPress={() => setDialogVisible(false)}>
							<Text style={styles.textStyle}>Save</Text>
						</Pressable>
					</View>
				</Modal>
				
				<View>
					<Text>Name:</Text>
					<Text>Code:</Text>
					<Pressable
						style={[styles.button, styles.buttonOpen]}
						onPress={() => setDialogVisible(true)}
					>
						<Text style={styles.textStyle}>Add</Text>
					</Pressable>
					<SafeAreaView style={styles.container}>
						<FlatList
							data={DATA}
							renderItem={({ item }) => <Item id={item.id} title={item.title} />}
							keyExtractor={item => item.id}
						/>
					</SafeAreaView>
				</View>
			</View>
		</ScrollView>
	);
}

const styles = StyleSheet.create({
	centeredView: {
		margin: 10,
		flex: 1,
		justifyContent: "center",
		alignItems: "center",

	},

	button: {
		margin: 12,
		width: 150,
		borderRadius: 20,
		padding: 10,
		elevation: 2,
	},
	buttonOpen: {
		backgroundColor: "#F194FF",
	},
	textStyle: {
		color: "white",
		fontWeight: "bold",
		textAlign: "center",
	},
	dialogStyle: {
		backgroundColor: "#ffffff",
		justifyContent: "center",
		alignItems: "center",
	},
	backdrop: {
		position: "absolute",
		top: 0,
		left: 0,
		right: 0,
		bottom: 0,
	},
	inputStyle: {
		height: 40,
		margin: 12,
		borderWidth: 1,
		padding: 10,
	},
	item: {
		backgroundColor: '#f9c2ff',
		padding: 10,
		marginVertical: 8,
		marginHorizontal: 16,
		
	  },
});

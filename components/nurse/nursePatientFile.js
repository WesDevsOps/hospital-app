import { useState } from "react";
import { SafeAreaView,StyleSheet, View, Text,ScrollView, Pressable } from "react-native";
import { TextInput, TouchableOpacity } from "react-native";
import RNPickerSelect from "react-native-picker-select";
import { CheckBox } from "react-native";
import { Button } from "react-native";
import { Picker } from "react-native";
import React from "react";

const NursePatientFile = ({route}) => {
    const [agree, setAgree] = useState(false);
    const {patient}=route.params;
    let today = new Date();
    const records=[
        {
            date:today,
            patient:patient.fullName,
            syptoms:"fever* or feeling feverish/chills, sore throat, cough, runny or stuffy nose, muscle or body aches, fatigue (tiredness), body aches, chills, cough, fatigue, fever",
            condition: patient.condition,
            date:"Mon Oct 24 2022"
        },
        {
            date:today,
            patient:patient.fullName,
            syptoms:"fever* or feeling feverish/chills, sore throat, cough, runny or stuffy nose, muscle or body aches, fatigue (tiredness), body aches, chills, cough, fatigue, fever",
            condition:patient.condition,
            date:"Tue Oct 25 2022"
        },
        {
            date:today,
            patient:patient.fullName,
            syptoms:"fever* or feeling feverish/chills, sore throat, cough, runny or stuffy nose, muscle or body aches, fatigue (tiredness), body aches, chills, cough, fatigue, fever",
            condition:patient.condition,
            date:"Mon Oct 24 2022"
        },
        {
            date:today,
            patient:patient.fullName,
            syptoms:"fever* or feeling feverish/chills, sore throat, cough, runny or stuffy nose, muscle or body aches, fatigue (tiredness), body aches, chills, cough, fatigue, fever",
            condition:patient.condition,
            date:"Tue Oct 25 2022"
        },
        {
            date:today,
            patient:patient.fullName,
            syptoms:"fever* or feeling feverish/chills, sore throat, cough, runny or stuffy nose, muscle or body aches, fatigue (tiredness), body aches, chills, cough, fatigue, fever",
            condition:patient.condition,
            date:"Wed Oct 26 2022"
        }
    ]
    const [nurseAdd,setNurseAdd]=React.useState(false)
    console.log(agree)
    return ( 
        <SafeAreaView  style={styles.container}> 
        <View style={{alignSelf: 'stretch',height: 40, backgroundColor:"#5060F0",paddingLeft:20,alignItems:"center", marginTop:50,flexDirection:"row"}}>
            <Text style={{color:"white"}}>{patient.fullName}</Text>
            <Text style={{color:"white",marginLeft:100}}>Condition </Text>
        <Picker
          style={{
            backgroundColor:"#2827D3",
            height: 25,
            width: 70,
            color: 'white',
          }}
          onValueChange={(value) => console.log(value)}>
          <Picker.Item label="Mild" value="Mild" />
          <Picker.Item label="Moderate" value="Moderate" />
          <Picker.Item label="Severe" value="Severe" />
        </Picker>
        </View>
        <View>
        <View style={styles.todayRecords}>
            <Text style={{color:"white",marginLeft:10}}>Today's records</Text>
        <View style={{width: 339,height: 1,backgroundColor: "#FFFFFF"}} ></View>

        <ScrollView>
            {records.map((record,i)=>(
                record.date===today.toString().substring(0,15)?(
             
                        <View key={i} style={{width:300,alignSelf:"center", backgroundColor: "#5060F0",marginTop:10,padding:5,borderRadius:8}}>
                            <Text style={{color:"white"}}>Date: {record.date}</Text>
                            <Text style={{color:"white"}}>Patient: {record.patient}</Text>
                            <Text style={{color:"white"}}>Notes: {record.syptoms}</Text>
                            {nurseAdd===false?(
                                <TouchableOpacity style={styles.btn} onPress={()=>setNurseAdd(true)}>Add notes</TouchableOpacity>
                            ):(
                                <View>
                                <TextInput placeholder="Notes by nurse" style={{width: "98%", height: 42, backgroundColor: "#2827D3",borderRadius: 5,placeholderTextColor:"white",paddingLeft:10,color:"white",margin:10,alignSelf:"center"}}>
                                </TextInput>
                                <TouchableOpacity style={styles.btn}>
                                    Save
                                </TouchableOpacity>
                                </View>
                            )}
                        
                    </View>
                ):(
                <Text style={{color:"white"}}></Text>
                )
            ))

            }
        </ScrollView>
        </View>
 
        <View style={{flexDirection:"row"}}>
        <CheckBox
          value={agree}
          onValueChange={() => setAgree(!agree)}
          color={agree ? "#4630EB" : "black"}
        />
        <Text style={{color:"white",marginLeft:10}}>Seen by nurse</Text>
        </View>
        
          <Button
        title="Share"
        style={{width:300}}
        disabled={!agree}
        onPress={() => {
          /* Do something */
        }}
      />

        <View style={{alignSelf:"stretch",marginTop:20,backgroundColor:"#5060F0",borderRadius:15,height:300,marginBottom:30}}>
        <Text style={{color:"white",marginLeft:10}}>Patient Medical history</Text>
        <View style={{width: 339,height: 1,backgroundColor: "#FFFFFF"}} ></View>
            <ScrollView style={{marginTop:10}}>
            {records.map((record,index)=>{
                return(
                        
                        <View key={index} style={{width:300,alignSelf:"center", backgroundColor: "#2827D3",marginTop:10,padding:5,borderRadius:8}}>
                            <Text style={{color:"white"}}>Date: {record.date}</Text>
                            <Text style={{color:"white"}}>Patient: {record.patient}</Text>
                            <Text style={{color:"white"}}>Notes: {record.syptoms}</Text>
                           
                        </View>
            )
            })}
            </ScrollView>
           
        </View>
        </View>
         
        <TouchableOpacity style={{width: 246, height: 41, backgroundColor: "#5060F0",borderRadius: 5,justifyContent:"center",marginBottom:20}} onPress={()=>navigation.navigate("nurseLogin")}>
            <Text style={{alignSelf:"center",color:"white"}}>Close</Text>
        </TouchableOpacity>
        </SafeAreaView>
     );
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      backgroundColor: "#2827D3",
      overflowX:"hidden",
    },
    record:{
        width: "95%",
        height: 44,
        backgroundColor:"#5060F0",
        borderRadius: 5,   
        alignSelf:"center",
        justifyContent:"center",
        marginTop:10,
        paddingLeft:10
    },
    btn:
    {
        color:"white",
        width:200,
        height:30,
        backgroundColor:"#189bcc"
        ,alignSelf:"center",
        alignItems:"center",
        justifyContent:"center",
        borderRadius:8,
        margin:10
    },
    todayRecords:{
        
            marginBottom:20,
            padding:20,
          alignSelf:"stretch",
            height:300,
            marginTop:20,
            // backgroundColor:"#5060F0",
            borderRadius:15,
            border: "2px solid #9C9EEB",
    }
})
 
export default NursePatientFile;
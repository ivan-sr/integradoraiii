import React from 'react';
import {
    Box,
    Heading,
    Icon,
    AspectRatio,
    Image,
    Text,
    Center,
    HStack,
    Stack,
    NativeBaseProvider,
    Button
  } from 'native-base';
  import { MaterialIcons, Ionicons } from '@expo/vector-icons';
  import { useNavigation } from '@react-navigation/core';


  function CardComponent(){
    const navigation = useNavigation()
    return(
       <Box
         rounded="lg"
         overflow="hidden"
         width="72"
         shadow={1}
         _light={{ backgroundColor: 'gray.50' }}
         _dark={{ backgroundColor: 'gray.700' }}
       >
         <Box>
           <AspectRatio ratio={16 / 9}>
             <Image
               source={{
                 uri:
                   'https://s3-us-west-2.amazonaws.com/devcodepro/media/tutorials/pseudoclases-css-first-child-last-child-nth-child-t1.png',
               }}
               alt="image"
             />
           </AspectRatio>
           <Center
             bg="#00ADB5"
             _text={{ color: 'black', fontWeight: '700', fontSize: 'xs' }}
             position="absolute"
             bottom={0}
             px="3"
             py="1.5"
           >
             CSS 3
           </Center>
         </Box>
         <Stack p="4" space={3}>
           <Stack space={2}>
             <Heading size="md" ml="-1">
               Lenguaje de Hojas de Estilo
             </Heading>
             <Text
               fontSize="xs"
               _light={{ color: 'violet.500' }}
               _dark={{ color: 'violet.300' }}
               fontWeight="500"
               ml="-0.5"
               mt="-1"
             >
               DSoft
             </Text>
           </Stack>
           <Text fontWeight="400">
           CSS (en inglés Cascading Style Sheets) es lo que se denomina lenguaje de hojas de estilo en cascada y se usa para estilizar elementos escritos en un lenguaje de marcado como HTML. CSS separa el contenido de la representación visual del sitio.
           </Text>
           <HStack alignItems="center" space={4} justifyContent="space-between">
             <HStack alignItems="center">
               <Text color="gray.500" fontWeight="400">
                 Hace 10 minutos
               </Text>
             </HStack>
           </HStack>
           <Button onPress={()=>{navigation.navigate("Development");}}>Volver</Button>
         </Stack>
       </Box>
       );
   }
   
   export default function () {
     return (
     <NativeBaseProvider>
       <Center flex={1} px="3">
         <CardComponent/>
       </Center>
     </NativeBaseProvider>
     );
   }
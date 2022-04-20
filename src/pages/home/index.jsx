import Container from "./style"
import axios from "axios"
import { useForm } from "react-hook-form"
import Form from "../../components/Form"
import { useState } from "react"
import Card from "../../components/Card"
import * as yup from "yup"
import { yupResolver } from '@hookform/resolvers/yup'

const Home= ()=>{

  const [ projects, setProjects] = useState([])
  const [ fail, setFail] = useState("")

  const schema = yup.object().shape({
    owner: yup.string().required("Campo obrigatório"),
    project: yup.string().required("Campo obrigatório")
  })

  const { register, handleSubmit, formState:{errors} } = useForm({
    resolver: yupResolver(schema)
  })

  const onSubmit = (data)=>{
    axios.get(`https://api.github.com/repos/${data.owner}/${data.project}`)
    .then((response)=>{
      setProjects([...projects, response.data])
      setFail("")
    })
    .catch((error)=>{
      console.log(error)
      setFail("ERRO - Repositório não encontrado!")
    })
  }


    return (
      <>
      <Container isFailure={!!fail}>
        <Form register={register} errors={errors} fail={fail} name="search" innerText="Search" onSubmit={handleSubmit(onSubmit)}/>
        <ul>
           {projects.map((project)=><Card repo={project}/>)}
        </ul>
       
      </Container>
      </>
    )
}

export default Home
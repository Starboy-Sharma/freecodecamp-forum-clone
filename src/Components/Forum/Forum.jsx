import React from 'react'

import { useParams } from "react-router-dom";

export default function Forum() {

    const {id, forum } = useParams();

    console.log(id, forum)

    return (
        <h2>
            Hello Forum
        </h2>
    )
}

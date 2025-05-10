




<template >
    <div class="p-5 ">
        <div class="col primary">

        

            <div class="row">
                <div class="col text-start m-3">
                    <input type="search"  name="search-contact" id="">
                </div>
                <div class="col text-end m-3">
                    <select name="10" id="">
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                    </select>
                </div>
            </div>
            <div class="row p-3">
                <table>
                    <thead>
                        <th>S.N</th>
                        <th>PLAN</th>
                        <th>DOMAINE</th>
                        <th>PRIX(FCFA)</th>
                        <th>EXPIRE LE:</th>
                        <th>CREER LE:</th>
                        <th>ACTIONS</th>
                        
                    </thead>
                    <tbody>
                        <tr>
                            <td>{{ index }}</td>
                            <td>{{ nom }}</td>
                            <td>{{ prenom }}</td>
                            <td>{{ pays }}</td>
                            <td>{{ nid }}</td>
                            <td>{{ adresse }}</td>
                            <td>{{ code }}</td>
                            <td>{{ tel }}</td>
                            <td>{{ email }}</td>
                            <td>{{ date }}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div class="row">
                
            </div>
        </div>
    </div>


</template>




<style scoped>

    .primary{
        border: 1px solid;
        border-radius: 5px;
        box-shadow: 1px 3px 3px  rgb(92, 88, 88);
    }
    select{
        width: 4rem;
        padding: .5rem;
        border-radius: 5px;

    }
    input{
        border-radius: 5px;
    }
    th{
        padding:1rem;
        background-color: #eaecf0;
        border-bottom: 1px solid;
    }



</style>
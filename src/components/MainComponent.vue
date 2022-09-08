<template>
    <div>
        <div class="container">
            <div class="row g-4">
                <div
                    v-for="character in filteredCharacters" :key="character.id"
                    class="col-3"
                >
        
                    <CharacterComponent
                        :src="character.image"
                        :name="character.name"
                        :species="character.species"
                        :origin="character.origin"
                    />
                </div>
            </div>
        </div>
    </div>
</template>

<script>

    import axios from 'axios';
    import CharacterComponent from './CharacterComponent.vue';

    export default {
        data() {
            return {
                // gestisco la lista di personaggi ritornata dalla api *
                listCharacters: [],
                // search: ''
            };
        },
        // recupero l'input come props dal padre e lo utilizzo per filtrare l'array
        props: {
            search: {
                type: String,
                default: ''
            }
        },
        computed: {
            filteredCharacters () {
                return this.listCharacters.filter((el) => {
                    const name = el.name.toLowerCase();
                    const find = this.search.toLowerCase();

                    if(name.includes(find)) return true
                    else return false;
                })
            }
        },
        // created viene eseguito qualche ms prima di mounted
        created() {
            // recuperiamo i dati dalla api
            axios
                .get("https://api.sampleapis.com/rickandmorty/characters")
                .then((res) => {

                // *
                this.listCharacters = res.data;
            })
                .catch((err) => {
                console.log("Errore: ", err);
            })
                .finally(() => {
                // console.log('finito');
            });
        },
        components: {
            CharacterComponent
        }
    }
</script>

<style scoped lang="scss">
    @import '../styles/general.scss';
  </style>
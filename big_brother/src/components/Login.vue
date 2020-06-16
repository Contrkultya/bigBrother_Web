<template>
        <div class="card">
          <div class="card-body">
            <div v-if="error" class="alert alert-danger">{{error}}</div>
            <form action="#" @submit.prevent="submit">
              <div class="form-group row">
               <h5>Login</h5>
                <label for="email" class=" text-md-right">Email</label>
                <div >
                  <input
                    id="email"
                    type="email"
                    name="email"
                    value
                    style="background-color: white "
                    required
                    autofocus
                    v-model="form.email"
                  />
                </div>
              </div>
              <div class="form-group row">
                <label for="password" class=" col-form-label text-md-right">Password</label>
                <div >
                  <input
                    id="password"
                    type="password"
                    name="password"
                    required
                    v-model="form.password"
                    style="background-color: white "
                  />
                </div>
              </div>

              <div class="form-group row ">
                  <button type="submit" class="btn btn-primary">Login</button>
                              
                 <router-link to="register" class="nav-link">Register</router-link>

              </div>
            </form>
          </div>
        </div>
</template>

<script>
import firebase from "firebase";
import store from '../store';
store.dispatch('bindTodosRef');
export default {
  data() {
    return {
      form: {
        email: "",
        password: ""
      },
      error: null
    };
  },
  methods: {
    submit() {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.form.email, this.form.password)
        .then(data => {
          this.$router.replace({ name: "Dashboard" });
        })
        .catch(err => {
          this.error = err.message;
        });
    }
  }
};
</script>

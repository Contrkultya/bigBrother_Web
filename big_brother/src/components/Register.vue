<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-md-8">
        <div class="card">
          <div class="card-body">
            <div v-if="error" class="alert alert-danger">{{error}}</div>
            <form action="#" @submit.prevent="submit">
              <div class="form-group row">
                  <h5>Register</h5>
                <label for="name" class=" col-form-label text-md-right">Name</label>

                <div>
                  <input
                    id="name"
                    type="name"
                    name="name"
                    value
                    required
                    autofocus
                    v-model="form.name"
                    style="background-color: white "
                  />
                </div>
              </div>

              <div class="form-group row">
                <label for="email" class=" col-form-label text-md-right">Email</label>

                <div >
                  <input
                    id="email"
                    type="email"
                    name="email"
                    value
                    required
                    autofocus
                    style="background-color: white "
                    v-model="form.email"
                  />
                </div>
              </div>

              <div class="form-group row">
                <label for="password" class="col-form-label text-md-right">Password</label>

                <div>
                  <input
                    id="password"
                    type="password"
                    name="password"
                    required
                    style="background-color: white "
                    v-model="form.password"
                  />
                </div>
              </div>

              <div class="form-group row mb-0">
                <div class="col-md-8 offset-md-4">
                  <button type="submit" class="btn btn-primary">Register</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import firebase from "firebase";

export default {
  data() {
    return {
      form: {
        name: "",
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
        .createUserWithEmailAndPassword(this.form.email, this.form.password)
        .then(data => {
          data.user
            .updateProfile({
              displayName: this.form.name
            })
            .then(() => {});
        })
        .catch(err => {
          this.error = err.message;
        });
    }
  }
};
</script>

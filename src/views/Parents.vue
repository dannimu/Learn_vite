<template>
    <div>
        <hr>
        父组件parents
        <router-link to="/parents/styleone">子1 StyleOne</router-link>
        <router-link to="/parents/styletwo">子2 StyleTwo</router-link>
        <div>
            <hr>
            <router-view />
        </div>
    </div>
</template>